const fs = require('node:fs');
const { Readable, Writable, Transform } = require('node:stream');

// Read Stream

const readable = fs.createReadStream('./my-file.txt', { highWaterMark: 20 });

readable.on("data", (chunk) => {
    console.log('new chunk', chunk.toString());
    /*readable.pause();
    setTimeout(() => {
        readable.resume();
    },1000);*/
});

// Write Stream

const writable = fs.createWriteStream('./my-new-file.txt');
writable.write('Hello');
writable.write('\n');
writable.end('end file');

