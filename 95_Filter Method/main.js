"use strict";
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10 ?
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by
// the provided function.
// Answer 95:
let num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
function filter() {
    console.log(num_array.filter(num => num > 10));
}
filter();
