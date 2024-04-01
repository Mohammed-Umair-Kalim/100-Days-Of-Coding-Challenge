// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN
// (Not a Number) and return a boolean result ?

// Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out
// to be a number. It's useful for validating inputs or results of calculations.

// Answer 90:
function not_a_number (input:boolean | any){
    console.log(isNaN(input))
}

console.log("\n")

not_a_number("Hi"); // Returns True because its not a number.

console.log("\n")

not_a_number(123); // Returns False because its a number.
