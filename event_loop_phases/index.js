const fs = require('fs');
const net = require('net');

console.log('1: sync');

setTimeout(() => console.log('2: Timer Phase'), 0);

setImmediate(() => console.log('3: Check phase'));

fs.readFile('./content.txt', () => {
    console.log('4: poll phase (I/O) callback');
});

const server = net.createServer((socket) => {
 socket.on('close', () => console.log('5: close callback phase'));
 socket.destory();
});

server.listen(0, () => server.close());

process.nextTick(() => console.log('6: nextTick (before any phase)'));
Promise.resolve().then(() => console.log('7:  promise microtask'));

console.log('8: sync');

// 1 8 6 7 2 3 4 5