"use strict";
// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {}
// that uses both let and const. Show how variables declared inside the block are not accessible outside of it ?
// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block,
// enhancing code organization and preventing accidental access from outside the block.
// Answer 72:
{
    let a = "Umair";
    const b = 23;
    var c = "Hi";
}
// a = "abc" // Error cannot find name 'a' , let has a block scope
// b = 2 // Error cannot find name 'b' , const has a block scope
c = "\nBye"; // No error , var has a global scope , it can be reassign outside the block
console.log(c);
