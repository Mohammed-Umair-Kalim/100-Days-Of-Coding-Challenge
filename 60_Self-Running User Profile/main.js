"use strict";
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the
// user's name and age.?
// Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user profile by itself
//  and can tell you about the user.?
// Answer 60:
// function user_bio(name:string , age:number):any{
//     return `
//     Your name is: ${name},
//     Your age is: ${age} `
// }
// console.log(user_bio("Umair",25))
// This profile sets itself up and can share info about the user
let userProfile = (function () {
    // The user's details are kept inside
    let name = "John";
    let age = 30;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
