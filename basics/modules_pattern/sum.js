// By default, module protected their variables and functions from leaking

var x = 10;

y = 10; // Non strict support

function calculateSum(a, b) {
    const sum = a + b;

    return sum;
}

module.exports = {
    calculateSum,
    x,
}
