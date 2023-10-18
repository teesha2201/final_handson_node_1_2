// HAndson1: Create a route using http module and explain what is node by sending response in HTML and JSON format

const http = require("http")
const json_var = require('./handson1')

const detail = JSON.stringify(json_var) //manually change in string from json format
console.log(detail)

const server = http.createServer((req,res)=>{

   if(req.url==="/node")
   {
    res.write("<h1>What is node?</h1>")
    res.write("<ul>")
    res.write("<li>Node is not a language , it is a server environment which is written in c,c++ and js.</li>")
    res.write("<li>It accept multiple request at a time in a asyncronous manner and response.</li>")
    res.write("<li>It can connect  with database.</li>")
    res.write("<li>Node js is open source and free.</li>")
    res.write("<li>Node js not run on browser, mostly used for API.</li>")
    res.write("</ul>")
    
    res.end();
   }
   else if(req.url==='/jsonformatnode'){
        res.write(detail)
        res.end();
   }
   else
   {
    res.write("Page not Found");
    res.end();
   }
});


server.listen(5000,()=>{
    try{
        console.log("server is running on port no. 5000")
    }
    catch(err){
        console.log("server is crashed or not create",err)
    }
})



// app.get("/",(req,res)=>{
//     res.send("Home page")
// })
// app.get("/about",(req,res)=>{
//     res.send("About page")
// })
// app.get("/contact",(req,res)=>{
//     res.send("Contact page")
// })