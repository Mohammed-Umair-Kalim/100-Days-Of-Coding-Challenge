"use strict";
// Question 99: Generate a date object representing your next birthday and log it to the console ?
// Explain & TIP: When creating a Date object for a future event like a birthday,
// you might need to adjust the year based on whether the birthday has already occurred this year or not
// Answer 99:
let DOB = (month, day) => {
    let current_date = new Date();
    let current_year = current_date.getFullYear();
    let birth_date = new Date(current_year, month - 1, day);
    if (birth_date < current_date) {
        birth_date.setFullYear(current_year + 1);
    }
    return birth_date;
};
let nxt_birthday = DOB(2, 3);
console.log("\nMy Next Birthday Will Be On:", nxt_birthday.toLocaleDateString());
