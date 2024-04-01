// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and
// returns the number rounded to the nearest integer ?

// Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number.
// It looks at the decimal part and decides whether to round up or down.

// Answer 88:

function rounding_up(num:number){
    console.log(Math.round(num))
};

//Rounding Number To Closest Whloe Number:
console.log("\n");
rounding_up(2.4);
console.log("\n");
rounding_up(2.5);


