const http = require("http");
const { Worker } = require("node:worker_threads");

const server = http.createServer((req, res) => {
  try {
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("Home Page");
    } else if (req.url === "/slow_page") {
      const sab = new SharedArrayBuffer(4);
      const i32a = new Int32Array(sab);
      i32a[0] = 54;
      const worker = new Worker("./worker_thread/worker_thread.js");
      worker.postMessage({ sab });
      console.log(i32a);
      // worker.on('message', (data) => {
      //    res.writeHead(200, {'Content-type': 'text/plain'});
      //     res.end(`Slow Page ${data}`);
      // })
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("Home Page");

      //  });
    }
  } catch (e) {
    console.log(e);
  }
});

server.listen(8000, () => console.log("Server is running on port 8000"));
