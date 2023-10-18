const blogrouter = require("express").Router();

blogrouter.get("/express",(req,res)=>{
    res.send([{"What_is_express ?":" Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes. It specifies how an application responds to a client request to a particular route, URI or path and a specific HTTP request method (GET, POST, etc.)"}])

})
blogrouter.get("/node",(req,res)=>{
    res.send([{"what_is_node ?":"Node is not a language , it is a server environment which is written in c,c++ and js.It accept multiple request at a time in a asyncronous manner and response.It accept multiple request at a time in a asyncronous manner and response.It can connect  with database.Node js is open source and free.Node js not run on browser, mostly used for API."}])
})
blogrouter.get("/author",(req,res)=>{
    res.send([{"Name":"Teesha","Graduation":"BTech"}])
})

module.exports = blogrouter
