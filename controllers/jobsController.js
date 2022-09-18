import Job from '../models/Job.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError, NotFoundError } from '../errors/index.js'
import checkPermissions from '../utils/checkPermissions.js'
import mongoose from 'mongoose'
import moment from 'moment'

// async because we are communicating with the server
const createJob = async (req, res) => {
    const {position, company } = req.body
    
    if (!position || ! company) {
        throw new BadRequestError('Please provide all values')
    }
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}

const getAllJobs = async (req, res) => {

    const {status, jobType, sort, search} = req.query

    const queryObject = {
        createdBy: req.user.userId
    }


    //Here we will add query strings to the URL parameters if certain conditions are met (if drop-down is not all)

    if (status !== 'all'){
        queryObject.status = status
    }
    if (jobType !=='all'){
        queryObject.jobType = jobType
    }
    if (search){
        queryObject.position = { $regex: search, $options: 'i'}
    }


    //no await here (added later)
    let result = Job.find(queryObject)


    //chain the SORT conditions here
    if (sort === 'latest'){
        result = result.sort('-createdAt')
    }
    if (sort === 'oldest'){
        result = result.sort('createdAt')
    }
    if (sort === 'a-z'){
        result = result.sort('position')
    }
    if (sort === 'z-a'){
        result = result.sort('-position')
    }

    //PAGINATION
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page -1) * limit

    //skip will skip a # of docs starting w/ 1st: https://www.mongodb.com/docs/manual/reference/operator/aggregation/skip/
    //limit will limit how many docs are returned by the query
    result = result.skip(skip).limit(limit)   


    //now we add await
    const jobs = await result

    const totalJobs = await Job.countDocuments(queryObject)     //number of docs
    const numOfPages = Math.ceil(totalJobs / limit)             //return largest int

    res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages })

}

const updateJob = async (req, res) => {
    const {id: jobId } = req.params
    const {company, position } = req.body

    if (!position || ! company) {
        throw new BadRequestError('Please provide all values')
    }

    const job = await Job.findOne({ _id: jobId })

    if (!job){
        throw new NotFoundError(`No job with id : ${jobId}`)
    }


    checkPermissions(req.user, job.createdBy)  //invoke function so that user can only edit their own jobs

    const updatedJob = await Job.findOneAndUpdate({_id: jobId}, req.body,{
        new: true,
        runValidators: true,    //runValidators allows validators to run on properties we provide  such as company or position
                                //i.e. - runValidators won't allow value not in drop-down for position to be passed, but ok if property not included
    })
    res.status(StatusCodes.OK).json({updatedJob})  //201; send JSON for postman
}


const deleteJob = async (req, res) => {
    
    const {id: jobId } = req.params
    
    const job = await Job.findOne({ _id: jobId })

    if (!job){
        throw new NotFoundError(`No job with id : ${jobId}`)
    }

    checkPermissions(req.user, job.createdBy)  //invoke function so that user can only edit their own jobs

    await job.remove()
    res.status(StatusCodes.OK).json({msg: 'Success!  Job removed.'})  //201; send JSON for postman

}


//aggregation pipeline for STATS page
const showStats = async (req, res) => {
    
    
    //PIPELINE 1:  Retrieve jobs and group by status such as declined, interview, etc.
    let stats = await Job.aggregate([ 
        {$match: {createdBy:mongoose.Types.ObjectId( req.user.userId )} },
        {$group: {_id:'$status', count:{$sum:1} } }  //https://www.mongodb.com/docs/manual/reference/operator/aggregation/sum/
    ])

    // console.log(stats)

    //iterate over array and pull out id and count.  return accumulator and count
    stats = stats.reduce((acc, curr) =>{
        const { _id: title,count } = curr
        acc[title] = count
        return acc
    }, {} )

    console.log(stats)


    const defaultStats = {
        pending: stats.pending || 0,
        technical_interview: stats.technical_interview || 0,
        declined: stats.declined || 0,
        phone_interview: stats.phone_interview || 0,
        coding_assessment: stats.coding_assessment || 0,
        behavioral_interview: stats.behavioral_interview || 0,
        phone_interview: stats.phone_interview || 0,
        accepted: stats.accepted || 0,
        rejected_archived: stats['rejected/archived'] || 0,
    }

    // console.log(defaultStats)

    //PIPELINE 2:  Retrieve jobs and group by month and year
    let monthlyApplications = await Job.aggregate([
        {$match: {createdBy:mongoose.Types.ObjectId( req.user.userId )} },
        {$group: {
            _id: {year: {$year:'$createdAt'}, month: {$month: '$createdAt'}},  
            count: { $sum: 1}
        },
    },

    { $sort: { '_id.year': -1, '_id.month': -1 }},  //-1 to sort by latest jobs and months first
    // { $limit: 6 },  //added to only display the last 6 months

    ])


    //iterate over monthly applications

    monthlyApplications = monthlyApplications.map((item) => {

        const {_id: {year, month}, count} = item
        const date = moment().month(month -1).year(year).format('MMM Y')           //moment 0 to 11 but MongoDB is 1 to 12
        return {date, count}
    })
    .reverse()



        //PIPELINE 3:  Retrieve jobs by iterating over each JobHistory array of notes/statuses
        let statsJobHistory = await Job.aggregate([ 
            {$match: {createdBy:mongoose.Types.ObjectId( req.user.userId )} },
            // {$unwind: '$jobHistory'} ,                                                      
        ])

        // console.log(statsJobHistory)

        // console.log(`Pipeline 3 stats are\n\n: `)
        // console.log(statsJobHistory)
        // console.log(statsJobHistory[0].jobHistory.pastStatus)

    let statusDict = {}
    
    
    const pastStatuses = statsJobHistory.map((item, index) => {

        const {status } = item
        const {_id, jobHistory} = item
        let pastStatusList = []
     

        if (jobHistory !== undefined){
        const pastStatus = jobHistory.map((item, index) => {
            // console.log(item)
            pastStatusList.push(item.pastStatus)
        })
            }
        // statusDict[_id] = [status]
        return {_id, index, status, pastStatusList}
    })

    // console.log(statusDict)
    // console.log(pastStatuses)


    const pastStatuses2 = pastStatuses.map((item, index) => {

        const {_id, status, pastStatusList} = item
        
        if (pastStatusList.length > 0){
            statusDict[_id] = [status, ...pastStatusList]
        }
        else
        {
            statusDict[_id] = [status]
        }

        return {_id, index, pastStatusList}
    })
    // console.log(statusDict)



    let statsTypesAll = await Job.aggregate([ 
        {$group: {_id:'$status'} }  //https://www.mongodb.com/docs/manual/reference/operator/aggregation/sum/
    ])
    
    let statsTypesAllList = []

    const statsTypesAllTest = statsTypesAll.map((item, index) => {
        // console.log(item)
        
        statsTypesAllList.push(item._id)
        
    })
    // console.log(statsTypesAllList)


    console.log(statusDict)
    for (const property in statusDict)
    {
        
        let subList = statusDict[property]

        if (subList.length >2) {
            
            console.log('sort here')
            console.log(subList)

            for (var i=0; i<subList.length; i++)
            {
                let item = subList[i].replace('behavioral_', ' ').replace('technical_', ' ').replace('phone_', ' ')
                let count = 2

                for (var j=i+1; j<subList.length; j++)
                {
                    
                    let item2 = subList[j].replace('behavioral_', ' ').replace('technical_', ' ').replace('phone_', ' ') 
                    let string_under = "_"

                        if (item == item2 ){                            
                        
                            item = item.concat(string_under)
                            subList[i] = item.concat(count)
                            count = count +1                            
                        }
                        else if (item.slice(0, -1) == item2){                            
                        
                            
                            subList[i] = item.concat(count)
                            count = count +1                            
                        }
                    
                    
                }

            }


        }
 
    }
  



    let statsMasterDict_Sankey = []

    for (const property in statusDict)
    {
        
        let subList = statusDict[property]

        if (subList.length <2) {
            statsMasterDict_Sankey.push(subList)
        }
        else{

        for (var i=0; i<subList.length; i++) {


            if (subList[i+1] !== undefined ){

                // if (subList[i+1] == subList[i] ){

                //     console.log([subList[i+1], subList[i]])
                //     let lengthString = subList[i+1].length
                //     console.log(subList[i+1][lengthString-2])

                // }





                statsMasterDict_Sankey.push([subList[i+1], subList[i]])
            }


        }
            }

    }
    console.log(statsMasterDict_Sankey)


    const MasterData_Sankey_Final = []
  
    for (const item in statsMasterDict_Sankey)
    {
        let list = statsMasterDict_Sankey[item]        
        // console.log(list)        
        if (list.length > 1 )
        {

            if (list[0] == "pending"){
                list[0] = "applied"
            }
            if (list[0].split("_")[1] == list[1].split("_")[1] ){
                list[1] = list[1].concat(" 2")
            }


                const listItem = {source: list[0].replace('behavioral_', ' ').replace('technical_', ' ').replace('phone_', ' ').replace('_', ' ').replace('_', ' '), target: list[1].replace('behavioral_', ' ').replace('technical_', ' ').replace('phone_', ' ').replace('_', ' ').replace('_', ' '), weight: 1}
                MasterData_Sankey_Final.push(listItem)
            }



        
        if (list.length <= 1 )
        {
            if (list[0] == "pending"){
                const space = " "
                const listItem = {source: "applied", target: list[0].replace('_', ' ').replace('_', ' '), weight: 1}
                MasterData_Sankey_Final.push(listItem)
            }
            else {

                const listItem = {source: "applied", target: list[0].replace('behavioral_', ' ').replace('technical_', ' ').replace('phone_', ' ').replace('_', ' ').replace('_', ' '), weight: 1}
                MasterData_Sankey_Final.push(listItem)
            }

        }

    }
    // console.log(MasterData_Sankey_Final)

   
    let error_list =[]

    for (var t=0; t<MasterData_Sankey_Final.length; t++)  {

    
       const {source, target} = MasterData_Sankey_Final[t]
       
    //    console.log({source, target},)

       for (var g=t; g<MasterData_Sankey_Final.length; g++) 
       {

        
        let source_2 = MasterData_Sankey_Final[g].source
        let target_2 = MasterData_Sankey_Final[g].target
        // console.log({source_2, target_2},)

        // the sankey chart crashes if you have an element going forward then backwards
        // for example, pending to job interview works
        // if later job interview to pending, then chart is going backwards, and crash
        // if (source == target_2 && target == target_2)
        // {
        //     console.log('error items')
        //     console.log({source, target, source_2, target_2})
        //     error_list.push(MasterData_Sankey_Final[g])
        //     MasterData_Sankey_Final.splice(g,1)
        // }



       }


    }

    // console.log('Error list items that would have caused the chart to crash!')
    // console.log(error_list)







    res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications, MasterData_Sankey_Final })
}







export { createJob, deleteJob, getAllJobs, updateJob, showStats }