const express = require('express')
const router = express.Router()

const {getallJob, getJob, updateJob, DeleteJob, CreateJob} = require('../controllers/jobs')


router.route('/').post(CreateJob).get(getallJob)
router.route('/:id').get(getJob).delete(DeleteJob).patch(updateJob)

module.exports = router