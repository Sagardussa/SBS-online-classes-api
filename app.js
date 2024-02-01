
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const studentRouter = require("./api/routes/student")
const facultyRouter = require("./api/routes/faculty")
const userRouter = require("./api/routes/user")

mongoose.connect('mongodb+srv://sagar:Sagar&1996@cluster0.rpgwq.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error',err => {
    console.log("connection failed");
})

mongoose.connection.on('connected',connected => {
    console.log("connected with database....");
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use("/student",studentRouter);
app.use("/faculty",facultyRouter);
app.use("/user",userRouter);



// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:'app is ok'
//     })
// })

app.use((req,res,next)=>{
    res.status(404).json({
        error:'bad is request'
    })
})

module.exports = app;