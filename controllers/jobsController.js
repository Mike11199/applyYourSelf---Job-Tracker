import Job from '../models/Job.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError, NotFoundError } from '../errors/index.js'


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
    const jobs = await Job.find({ createdBy: req.user.userId })
    res
        .status(StatusCodes.OK)
        .json({ jobs, totalJobs: jobs.length, numOfPages: 1 })
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


    // check permissions later

    const updatedJob = await Job.findOneAndUpdate({_id: jobId}, req.body,{
        new: true,
        runValidators: true,    //runValidators allows validators to run on properties we provide  such as company or position
                                //i.e. - runValidators won't allow value not in drop-down for position to be passed, but ok if property not included
    })
    res.status(StatusCodes.OK).json({updatedJob})  //201; send JSON for postman
}


const deleteJob = async (req, res) => {
    res.send('delete job')
}

const showStats = async (req, res) => {
    res.send('show stats')
}






export { createJob, deleteJob, getAllJobs, updateJob, showStats }