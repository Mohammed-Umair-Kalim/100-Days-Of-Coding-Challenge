"use strict";
// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not.
// Try to reassign a const-declared variable and catch the error ?
// Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables
// that should not change once set. Using const helps make your code safer and more predictable.
// Answer 71:
// let nam_e = "\nMohammed Umair\n";
// console.log(nam_e);
// nam_e = "Umair\n";
// console.log(nam_e);
// const n_ame = "Mohammed Umair";
// console.log(n_ame)
// cannot re-assign const variable:
// n_ame = "Umair"
// Using `let` for a variable that can be reassigned
let age = 25;
age = 26; // Works fine because `let` allows reassignment
console.log(age); // Shows 26
// Trying to reassign a `const`-declared variable
const name12 = "Alice";
try {
    age = 17; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.
