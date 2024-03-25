"use strict";
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific
// number to any other number you give them later.?
// Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it.
// This program makes that magic box for you!
// Answer 59:
// This program makes a function that adds a specific number
function makeAdder(number, valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    {
        return number + valueToAdd;
    }
    ;
}
// Making a magic box that adds 5
let addFive = makeAdder(5, 10);
console.log(addFive);
console.log("Adding 5 = ", addFive + 5);
