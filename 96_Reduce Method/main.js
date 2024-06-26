"use strict";
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array ?
// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array
// (from left to right) to reduce it to a single value.
// Answer 96:
let number = [1, 2, 3, 4, 5];
function reduce() {
    console.log(number.reduce((a, b) => a + b));
}
// reduce method sums up all numbers in an array:
reduce();
