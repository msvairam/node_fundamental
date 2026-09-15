const module1 = module;
const require1 = require;

(function(module, require) {
    const { calculateSum } = require('./sum.js');
    module.exports.x = calculateSum(10, 20);
})(module1, require1);



