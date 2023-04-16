const mongoose = require('mongoose')
const Schema = mongoose.Schema


const applicationSchema = new Schema({
    jobId:{type: String, required: true},
    userId: {type: String, required: true},
    coverDesc: {type: String, required: true},
    resume: {data: Buffer, contentType: String}
})

module.exports = mongoose.model('Application', applicationSchema);


