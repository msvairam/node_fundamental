const fs = require('node:fs');
const { Transform, pipeline } = require('node:stream');

// Duplex Stream

const readable = fs.createReadStream('./my-file.txt', { highWaterMark: 20 });
const writable = fs.createWriteStream('./my-new-file.txt');

const uppercase = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

// readable.pipe(uppercase).pipe(writable); // Make memory leaks
pipeline(readable, uppercase, writable, (error) => {
    if(error) {
        console.log(error);
    }
});