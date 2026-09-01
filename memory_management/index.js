const EventEmitter = require('node:events');
const express = require('express');
const app = express();
const eventEmitter = new EventEmitter();

// global variables
let task= [];

setInterval(() => {
  const m = process.memoryUsage();
  console.log({
    rss: (m.rss / 1024 / 1024).toFixed(1) + 'MB',        // total OS memory
    heapUsed: (m.heapUsed / 1024 / 1024).toFixed(1) + 'MB',
    heapTotal: (m.heapTotal / 1024 / 1024).toFixed(1) + 'MB',
    external: (m.external / 1024 / 1024).toFixed(1) + 'MB', // Buffers, native bindings
  });
}, 10_000);

app.get('/', (req, res, next) => {
    // closure with an external variable reference
    task.push(function() {
        return req.headers;
    });
    
    // too-much data
    const hugeArray = new Array(1000000).fill(req);
    // node-cache, memcahced


    //circular object reference
    req.user = {
        id: 1,
        username: 'Inefficient User',
        badObject: req,
        hugeArray,
    };

    // clear event emitter listeners
    eventEmitter.on('start', () => {
        console.log('Useless event emitter');
    })
    // eventEmitter.removeListener('start');

    setTimeout(() => {
        res.send('Hello World');
    });

    //clearTimeout
});

app.listen(3000, () => {
    console.log('app started 3000 port successfully');
})