const express = require('express')
require('dotenv').config()
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')
const cors=require("cors");
const bodyParser = require('body-parser')


// express app
const app = express()

const port = process.env.PORT || 4000
const uri = process.env.MONGO_URI 

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

// middleware
app.use(cors(corsOptions))
app.use(express.json())
// app.use(bodyParser.json())
app.use('/api/workouts',workoutRoutes)

 
// connect to db
mongoose.connect(uri)
    .then(()=>{
            app.listen(port,()=>{
            console.log(`connected to db and server listening on port ${port}`)
            })
        }
    )
    .catch((error)=>console.log(error))

 


