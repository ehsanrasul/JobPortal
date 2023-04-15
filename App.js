const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userRouter = require('./Routes/userRoutes')
const jobRouter = require('./Routes/jobRoutes')
const loginRouter = require('./Routes/LoginRoutes')


app.use(express.json())


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


mongoose.connect(process.env.MONGO_URI,
{useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB")).catch(err => console.log(err));

//Routes
app.use("/api/user", userRouter)
app.use("/api/job", jobRouter)
app.use("/api/login", loginRouter)

app.listen(3000, () => console.log("Server Listening at Port : "+process.env.PORT))

