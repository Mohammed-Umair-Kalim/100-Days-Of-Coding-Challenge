"use strict";
// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year ?
// Explain & TIP: To find the difference between two dates, you can subtract one Date object from another,
// which gives you the difference in milliseconds. Convert that to days to see how many days are left until
// a specific event
// Answer 98:
let current_date = new Date();
let new_year = new Date(current_date.getFullYear() + 1, 0, 1);
let difference = new_year.getTime() - current_date.getTime();
let days = difference / 86400000;
console.log("\nUntil New Year", Math.round(days), "Days Are Left.");
