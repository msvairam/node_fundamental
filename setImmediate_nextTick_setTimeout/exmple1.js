console.log('1: sync code');

process.nextTick(() => console.log('3: nextTick callback'));

console.log('2: sync code');