"use strict";
// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number
// (like "123") and converts it into an actual number type ?
// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like
// strings into real numbers, allowing you to perform mathematical operations on them.
// Answer 89:
// Digit Function:
function str_to_num(digit1, digit2) {
    console.log(parseInt(digit1) + parseFloat(digit2));
}
console.log("\n");
str_to_num("123", "0");
console.log("\n");
// Adding two digits:
str_to_num("2", "3.5");
