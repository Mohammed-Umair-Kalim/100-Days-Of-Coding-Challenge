"use strict";
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present
// in a given string. It should return true if found, otherwise false ?
// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text,
// returning a boolean (true or false).
// Answer 86:
function true_false() {
    let myArray = ["Python", "JavaScript", "TypeScript"];
    //Returns true because JavaScript is in the array:
    console.log(myArray.includes("JavaScript"));
    //Returns false because NextJs is not in the array:
    console.log(myArray.includes("NextJs"));
}
true_false();
