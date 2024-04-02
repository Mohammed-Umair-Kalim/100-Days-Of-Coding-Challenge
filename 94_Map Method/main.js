"use strict";
// Question 94: Use the .map() method to create a new array that contains the length of each word from an array
// of words ?
// Explain & TIP: The .map() method transforms each item in an array according to a specific function and
// returns a new array with the transformed items.
// Answer 94:
let my_fav_array = ["Pomegranate", "Chrlyser Me412", "Huawei Mate60 pro"];
let length_of_each_string = my_fav_array.map(item => item.length);
// it will return 11,14 & 17:
console.log(length_of_each_string);
