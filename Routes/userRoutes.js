const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('../Model/userModel')


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())


//Creating a New User to the Database
app.post('/createUser', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving article');
    }
});



module.exports = app;