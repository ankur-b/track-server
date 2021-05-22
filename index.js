const express = require("express")
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
const trackRoutes = require("./routes/trackRoutes")
const bodyParser = require("body-parser")
const mongodbUri = require("./utils/db")
const requireAuth = require("./middlewares/requireAuth")

const app =  express()
app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

mongoose.connect(mongodbUri,{
    useNewUrlParser:true,
    useCreateIndex:true
})

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo instance');  
})

mongoose.connection.on('error',(err)=>{
    console.log("errr",mongodbUri)
    console.log('Error connecting to mongo',err);
})

app.get("/", requireAuth,(req,res)=>{
    res.send(`Your email: ${req.user.email}`);
})
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});