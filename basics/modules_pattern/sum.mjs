// By default, module protected their variables and functions from leaking

export var x = 10;

export function calculateSum(a, b) {
    const sum = a + b;

    return sum;
}