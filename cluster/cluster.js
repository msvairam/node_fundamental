const http = require('node:http');
const cluster = require('node:cluster');
const OS = require('node:os');

console.log(OS.cpus().length);

if(cluster.isPrimary) {
    console.log(`Master Process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
} else {
    console.log(`Worker ${process.pid} is started`);
    const server = http.createServer((req, res) => {
        if(req.url === '/') {
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.end('Home Page');
        } else if(req.url === '/slow_page') {
            let j = 0;
            for(let i =0; i < 6000000000; i++) {
                j++;
            }
            res.writeHead(200, {'Content-type': 'text/plain' });
            res.end(`Slow Page ${j}`);
        }
    });
    server.listen(8000, () => console.log('Server 8000 run Successfully'));
}

