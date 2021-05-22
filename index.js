const express = require("express")
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
const bodyParser = require("body-parser")
const mongodbUri = require("./db")

const app =  express()
app.use(bodyParser.json())
app.use(authRoutes)

mongoose.connect(mongodbUri,{
    useNewUrlParser:true,
    useCreateIndex:true
})

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo instance');
})

mongoose.connection.on('error',(err)=>{
    console.log('Error connecting to mongo',err);
})

app.get("/",(req,res)=>{
    res.send("Hi There!");
})
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});