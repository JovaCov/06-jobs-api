const Job =require('../models/Job')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError} = require('../errors')

const getallJob = async (req,res) => {
    res.send('Get all jobs')
}
const getJob = async (req,res) => {
    res.send('Get job')
}
const CreateJob = async (req,res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    
    res.status(StatusCodes.CREATED).json({job})
}
const updateJob = async (req,res) => {
    res.send('Update job')
}
const DeleteJob = async (req,res) => {
    res.send('Delete Job')
}
module.exports = {
   getJob,
   getallJob,
   CreateJob,
   DeleteJob,
   updateJob,
}