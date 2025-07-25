
// Core Module 
const http = require('http');


// Returns instance of http.Server Object
let server = http.createServer((req,res)=>{
    // console.log(req);
    // console.log("Url : " , req.url , "Method : " , req.method , "Header : " , req.headers);
    if (req.url === "/"){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
            res.write('<body>');
                res.write("<form action='/message' method='post'><input type='text'><button type='submit'>Submit</button></form>");
            res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    
    res.setHeader('Content-Type','text/html');
        res.write('<html>');
            res.write('<body>');
                res.write('Hahaha');
            res.write('</body>');
        res.write('</html>');
    res.end();
    // process.exit();
});

server.listen(8000);