// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango" ?

// Explain & TIP: To replace an item in an array, find its index using .indexOf(),
// then use that index to set a new value with array bracket notation.

// Answer 93:
let fruits_list = ["Apple","Banana","Orange"];

// replacing Banana with pomegranate:
fruits_list[fruits_list.indexOf("Banana")] = "Pomegranate";

console.log(fruits_list);