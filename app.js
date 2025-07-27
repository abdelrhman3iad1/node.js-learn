
// Core Module 
const http = require('http');

// My Module (CommonJs)
const routes = require('./routes');

// Returns instance of http.Server Object
let server = http.createServer(routes);

server.listen(8000);

/**
 * Event Loops excutes in order
 * 1- timers callbacks : setTimeout ,setInterval
 * 2- Pending callbacks : any I/O related callbacks
 * 3- poll : new I/O events callbacks
 * 4- check: setImmediate callbacks
 * 5- close callbacks
 * unitl refs == 0 so process.exit() done
 * but in server environment there is always 1 refs don't decrement as the rest  
 */