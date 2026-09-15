const { calculateSum, calculateMultiply } = require('./calculate');

var x = 10;
var y = 20;

const resultSum = calculateSum(x, y);

const resultMultiply = calculateMultiply(resultSum, x);

console.log(resultSum);
console.log(resultMultiply);

// Read from json file

const data = require('./data.json');
console.log(data);
