"use strict";
// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where
// each number is twice its original value?
// Explain & TIP: We can use a special tool to go through each number in our list and make a new list with
// each number doubled.?
// Answer 55:
let num_list = [1, 2, 3];
let multiplied = num_list.map(num => num * 2);
console.log(multiplied);
