const { availableParallelism }= require('node:os');
const cluster = require('node:cluster');

const cpuCount = availableParallelism();

console.log(__dirname);
console.log(`Primary pid ${process.pid}`);

    cluster.setupPrimary({
        exec: __dirname+'/index.js',
    });

    for(let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }

    cluster.on('exist', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} has terminated`);
        console.log("Initiating Replacement");
        cluster.fork();
    })


console.log(availableParallelism());