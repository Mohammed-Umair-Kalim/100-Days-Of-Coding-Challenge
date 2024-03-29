// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to
// uppercase, then to lowercase, and logs both ?

// Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in
// a string, useful for formatting or comparing strings.

// Answer 83:
function upper_lower(string:string)
{
    console.log(`\nOriginal String: ${string}`)
    console.log(`String in uppercase: ${string.toUpperCase()}`)
    console.log(`String in lowercase: ${string.toLowerCase()}`)
}

upper_lower("umAIr")