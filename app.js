
// Core Module 
const http = require('http');

// My Module (CommonJs)
const routes = require('./routes');

// Returns instance of http.Server Object
let server = http.createServer(routes);

server.listen(8000);

/**
 * Two types of async callbacks :
 * by V8 engine built in node.js 
 * and as a library made by libuv and used in several languages  
 * 
 * Async Callbacks from v8 in order
 * 1- process.nextTick()
 * 2- Promises
 * 
 * then
 * 
 * Async Callbacks from libuv excutes in order
 * 1- timers callbacks : setTimeout ,setInterval
 * 2- Pending callbacks : any I/O related callbacks
 * 3- poll : new I/O events callbacks
 * 4- check: setImmediate callbacks
 * 5- close callbacks
 * 
 * all of these callbacks are excuted as a queue contains each operation ,
 *  the priorty of each operation makes the queue of callbacks excutes until its empty
 * 
 *  process.nextTick() -> Promises -> timers -> process.nextTick() -> Promises ->
 *  Poll and Pending Callbacks -> process.nextTick() -> Promises -> check
 *  -> process.nextTick() -> Promises
 * 
 * 
 * until refs == 0 so process.exit() done
 * but in server environment there is always 1 refs don't decrement as the rest  
 */