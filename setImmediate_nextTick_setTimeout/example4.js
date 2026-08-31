setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));


const fs = require('fs');

fs.readFile('./content.txt', () => {
    setTimeout(() => console.log('poll phase with timeout'), 0);
    setImmediate(() => console.log('poll phase with immediate'));
})