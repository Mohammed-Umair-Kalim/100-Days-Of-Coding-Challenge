"use strict";
// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the
// word "code" within any given string and returns its position ?
// Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string.
// If the text isn't found, this method returns -1.
// Answer 85:
function index_teller() {
    let array = ["app", "code", "script"];
    return array;
}
console.log("\nArray:", index_teller(), "\n");
console.log(`Index of code in array is one, so it returns one: ${index_teller().indexOf("code")}\n`);
console.log(`The word 'game' is not in the list, it returns negative one: ${index_teller().indexOf("game")}`);
