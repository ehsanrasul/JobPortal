const express = require('express')
const app = express()
require('dotenv').config()
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('../Model/userModel')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())


app.post('/', async (req, res) => {

    const userName = req.body.userName;
    const password = req.body.password;    
    const user = await User.findOne({userName: userName})
    
    if (!user) {
        return res.status(401).json({error: "User not found"});
    }

    if(user.password !== password){
        return res.status(401).json({error: "Invalid password"});
    }
    console.log("User Authenticated")
    jwt.sign({user}, process.env.SECRET, { expiresIn: '1h' }, (err, token) => {
        if (err) {
            return res.status(500).json({error: "Unable to generate token"});
        }
        localStorage.setItem('token', token);
        localStorage.setItem('sessionId', userName);
        res.json({token})
    })
})



module.exports = app;