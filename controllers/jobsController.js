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

    //iterate over array and pull out id and count.  return accumulator and count
    stats = stats.reduce((acc, curr) =>{
        const { _id: title,count } = curr
        acc[title] = count
        return acc
    }, {} )


    const defaultStats = {
        pending: stats.pending || 0,
        interview: stats.interview || 0,
        declined: stats.declined || 0
    }

    //PIPELINE 2:  Retrieve jobs and group by month and year
    let monthlyApplications = await Job.aggregate([
        {$match: {createdBy:mongoose.Types.ObjectId( req.user.userId )} },
        {$group: {
            _id: {year: {$year:'$createdAt'}, month: {$month: '$createdAt'}},  
            count: { $sum: 1}
        },
    },

    { $sort: { '_id.year': -1, '_id.month': -1 }},  //-1 to sort by latest jobs and months first
    { $limit: 6 },  //added to only display the last 6 months

    ])


    //iterate over monthly applications

    monthlyApplications = monthlyApplications.map((item) => {

        const {_id: {year, month}, count} = item
        const date = moment().month(month -1).year(year).format('MMM Y')           //moment 0 to 11 but MongoDB is 1 to 12
        return {date, count}
    })
    .reverse()


    res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications })
}







export { createJob, deleteJob, getAllJobs, updateJob, showStats }