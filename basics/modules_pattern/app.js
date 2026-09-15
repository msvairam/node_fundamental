require('./xyz.js'); // one module into another
const { calculateSum , x } = require('./sum.js'); // sync way modules import,
//  By Default userd in NodeJs, Old Way
const  obj = require('./sum.js');
console.log(obj);

console.log('Vanakkam Vairamuthu');

let a = 10;
let b = 20;

console.log(calculateSum(a, b));
console.log(x);

//console.log(a + b);

// console.log(global); // old global variable for node env
// console.log(globalThis) // new global variable support in all env (node, all browsers);

//console.log(global === globalThis) // true;