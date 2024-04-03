"use strict";
// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY" ?
// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way.
// The Date object provides methods to get the day, month, and year, which you can then assemble into
// any format you need.
// Answer 97:
function date() {
    let current_date = new Date();
    let day = current_date.getDate();
    let month = current_date.getMonth() + 1;
    let year = current_date.getFullYear();
    console.log(day, "-", month, "-", year);
}
;
// It will display current date in the output of console:
date();
