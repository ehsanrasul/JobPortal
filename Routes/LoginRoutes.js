const express = require('express')
const app = express()
require('dotenv').config()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('../Model/userModel')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())


app.post('/',async (req, res) => {

    console.log("Ehsan")
    const user = await User.findOne({userName: "dwdd"})
    
    if(user.password === "dhjajajs"){
        console.log("User Authenticated")
        jwt.sign({user}, 'SecretKey', (err, token) => {
            res.json({token})
        })
    }

})



module.exports = app;