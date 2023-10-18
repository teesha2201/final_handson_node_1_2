const userrouter = require("express").Router();

userrouter.get("/abc",(req,res)=>{
    res.send("User name :abc")
})
userrouter.get("/pqr",(req,res)=>{
    res.send("User name :prq")
})
userrouter.get("/xyz",(req,res)=>{
    res.send("User name :xyz")
})
module.exports = userrouter