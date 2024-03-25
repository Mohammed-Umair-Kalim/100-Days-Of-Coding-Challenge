"use strict";
// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their
// product. Round the result to two decimal places.?
// Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long.
// Rounding can help keep numbers manageable.?
// Answer 68:
function two_Decimals(num1, num2) {
    console.log("\n", Math.floor(num1 * num2 * 100) / 100, "\n");
}
two_Decimals(0.4, 0.1);
console.log(0.4 * 0.1);
