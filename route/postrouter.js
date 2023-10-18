const postrouter = require("express").Router();

postrouter.get("/game",(req,res)=>{
    res.send("Welcome to Game page ")
})
postrouter.get("/music",(req,res)=>{
    res.send("Welcome to Music page")
})
postrouter.get("/movie",(req,res)=>{
    res.send("Welcome to Movie page ")
})



module.exports = postrouter;