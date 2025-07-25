
// Core Module 
const http = require('http');


// Returns instance of http.Server Object
let server = http.createServer((req,res)=>{
    console.log(req);
});

server.listen(8000);