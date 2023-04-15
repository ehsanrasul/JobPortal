const mongoose = require('mongoose')
const Schema = mongoose.Schema


const jobSchema = new Schema({
    jobId:{type: String, required: true},
    jobTitle: {type: String, required: true},
    jobDescription: {type: String, require: true},
    ExpReq: {type: String, required: true},
    location: {type: String, required: true}
})

module.exports = mongoose.model('Job', jobSchema);


