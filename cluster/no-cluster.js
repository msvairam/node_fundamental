const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('Home Page');
    } else if(req.url == 'slow_page') {
        let j = 0;
        for(let i =0; i < 60000000; i++) {
            j++;
        }
        res.writeHead(200, {'Content-type': 'plain/text'});
        res.end(`Slow Page ${j}`);
    }
});

server.listen(8000, () => console.log('Server 8000 run Successfully'));