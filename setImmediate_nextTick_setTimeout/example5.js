/*console.log('1');
setTimeout(() => console.log('5: setTimeout'), 0);
setImmediate(() => console.log('6: setImmediate'));
Promise.resolve().then(() => console.log('3: promise'));
process.nextTick(() => console.log('2: nextTick'));
console.log('4: sync end');
*/

// 1 4 2 3 5/6 (Ambiguous between each other)


/*
process.nextTick(() => setImmediate(() => console.log('1')));
Promise.resolve().then(() => console.log('2'));

*/
// 2 1

process.nextTick(() => setImmediate(() => console.log('1')));
Promise.resolve().then(() => setImmediate(() => console.log('2')));