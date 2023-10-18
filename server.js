//handson 2

const express = require("express");
const app = express();
const blogrouter = require("./route/blogrouter")
const postrouter = require("./route/postrouter")
const userrouter = require("./route/userrouter")


app.use("/api/main",blogrouter)
app.use("/api/main",postrouter)
app.use("/api/main",userrouter)

app.listen(6000,()=>{
    try{
        console.log("server is live on port no. 6000")
    }
    catch(err){
        console.log("server is not live on port no. 6000")
    }
})