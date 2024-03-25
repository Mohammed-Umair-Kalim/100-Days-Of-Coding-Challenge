"use strict";
// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number.
// For example, if provided with "Age: " and 30, it should give back "Age: 30".?
// Explain & TIP: In JavaScript, the + operator can add numbers together or join strings.
// Mixing a string with a number changes the number into a string for the joining
// Answer 64:
// function num_str (age:string , num:number){
//     let a = 30; console.log(age + num)
// };
// num_str("Age :" , 25)
// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover
// from dividing them using the % sign. For example, remainder(5, 2) should give 1.?
// Explain & TIP: The % (modulus) operator finds what's left after one number is divided by another.
// It's handy for figuring out if numbers are even, odd, and more.
// Answer 65:
// function num (num1:number , num2:number){
//     console.log("Remainder:" , num1 % num2)
// };
// num(5,2)
// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values.
// It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false)
// should be false.?
// Explain & TIP: The && operator in JavaScript checks if both sides are true.
// It's great for confirming several things are true all at once.
// Answer 66:
function bool(v1, v2) {
    console.log(v1 && v2);
}
bool(false, true);
bool(true, true);
