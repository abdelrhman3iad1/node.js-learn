
// Core Module 
const http = require('http');


// Returns instance of http.Server Object
let server = http.createServer((req,res)=>{
    console.log(req);
    console.log("Url : " , req.url , "Method : " , req.method , "Header : " , req.headers);
    // process.exit();
});

server.listen(8000);