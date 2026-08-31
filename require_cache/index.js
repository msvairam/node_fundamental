const counterA = require('./counter.js');
const counterB = require('./counter.js');

console.log(counterA === counterB);

counterA.increment();
counterB.increment();
console.log(counterA.getCount());// 2
console.log(counterB.getCount()); // 2

console.log(Object.keys(require.cache));

delete require.cache[require.resolve('./counter.js')];
const freshCounter = require('./counter.js');

console.log(freshCounter.getCount());