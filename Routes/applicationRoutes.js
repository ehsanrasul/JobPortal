const express = require('express')
const app = express()
require('dotenv').config()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Application = require('../Model/applicationModel')
const verifyToken = require('./jobRoutes.js')
const multer = require("multer");

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

const Storage = multer.diskStorage({

    destination: "uploads",
    filename: (req, file, cb) => {

        cb(null, file.originalname);

    },
});

const upload = multer ({
    storage: Storage
}).single('resume')


app.post('/upload', (req, res) => {

upload(req, res, (err) =>  {
    if(err){
        console.log(err)
    }else{

        const newApplication = new Application({
            jobId: req.body.jobId,
            userId: req.body.userId,
            coverDesc: req.body.coverDesc,
            resume: {
                data: req.file.filename,
                contentType: 'pdf'
            }
        })
        newApplication.save()
        .then(()=> res.send("Sucessfully Uploaded")).catch(err => console.log(err))
        }
    })
})


app.get('/:id', (req, res) => {
    const userId = req.params.id;
    
    Application.find({ userId: userId })
    .then((applications) => {
      res.json(applications)
    })
    .catch((err) => {
      console.log(err);
    });


  });
  


module.exports = app;