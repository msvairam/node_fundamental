console.log('couter.js executing');
let count =0;

console.log(module.exports);

module.exports = {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
}