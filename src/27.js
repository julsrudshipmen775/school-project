// This is a simple JavaScript code that demonstrates basic functions.
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) throw new Error("Cannot divide by zero.");
    return x / y;
}

// Example usage:
console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: -6
console.log(multiply(4, 2)); // Output: 8
try {
    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message); // Output: Cannot divide by zero.
}
