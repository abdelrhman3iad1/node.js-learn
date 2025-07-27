const fs = require('fs');

const requestHandler = (req,res) => {
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
        /** 
            * Based on Event Driven Approach that Node.js Working using it 
            * req.on('end') is a event and has a listener that is the callback function that will be excuted
            * after the whole code excuted ( after sending the response ) ,
            * so we made that event as a return to excute it totally
            * 
            * and also made the write file function asynchronous not sync , to make it non-blocking function
            * and used the error callback to assure the response returned based on the function is already excuted 
            */
        return req.on('end',()=>{
            const parsedData = Buffer.concat(data).toString(); // BC ITS TEXT 
            const message = parsedData.split('=')[1];
            console.log(message);
            fs.writeFile('message.txt', message , err => {
                res.statusCode = 302;
                res.setHeader('Location' ,'/');
                return res.end();
            });
        })
    }
    
    res.setHeader('Content-Type','text/html');
        res.write('<html>');
            res.write('<body>');
                res.write('Hahaha');
            res.write('</body>');
        res.write('</html>');
    res.end();
    // process.exit();
}
module.exports = requestHandler ;