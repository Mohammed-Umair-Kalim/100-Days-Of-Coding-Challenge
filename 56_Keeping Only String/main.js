"use strict";
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the
// words.?
// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only
// those words.?
// Answer 56:
let mixed_list = ["Mohammed", 25, "Umair", "Student", true,];
let filter = mixed_list.filter(str => typeof str == "string");
console.log(filter);
