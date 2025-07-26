
// Core Module 
const http = require('http');
const fs = require('fs');


// Returns instance of http.Server Object
let server = http.createServer((req,res)=>{
    // console.log(req);
    // console.log("Url : " , req.url , "Method : " , req.method , "Header : " , req.headers);
    if (req.url === "/"){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
            res.write('<body>');
                res.write("<form action='/message' method='POST'><input name='message' type='text'><button type='submit'>Submit</button></form>");
            res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    // Handling with Routing and Create a file and redirect to specific Location (route)
    //  with specific statusCode 

    /**
     * nodejs handling data in req by stream to send the data (text / images / files ) as chunks 
     * each chuck can't handle it alone
     * we use buffer that holds several chunks
     * req.on the method that handle these chunks 
     * 
     * then read it by Buffer Object
     */
    if (req.url === "/message" && req.method ==='POST'){
        const data = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            data.push(chunk);
        });
        req.on('end',()=>{
            const parsedData = Buffer.concat(data).toString(); // BC ITS TEXT 
            const message = parsedData.split('=')[1];
            console.log(message);
            fs.writeFileSync('message.txt',message);
        })
        res.statusCode = 302;
        res.setHeader('Location' ,'/');
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