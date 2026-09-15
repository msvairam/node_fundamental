//import { x, calculateSum } from './sum.mjs';
// It is not default in Node. you should add type in package.json
// New Way, Async Way, Strict Mode

async function calculate() {

   // x =10; // Strict Mode support

const { x, calculateSum } = await import('./sum.mjs'); // async supported imports

console.log(x);
console.log(calculateSum(4, 5));
}

calculate();