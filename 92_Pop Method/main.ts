// Question 92: Write a function to remove the last element from an array and return the removed element ?

// Explain & TIP: The .pop() method removes the last element from an array and returns that element.
// This can be useful when you need to work with the removed item.

// Answer 92:

let list =  ["Apple","Mango","Pomegranate"];
function pop(){
    let last_element = list.pop()
    console.log(`Last Element Removed: ${last_element}`)
};

// this function will remove and return last element from an array:

console.log(`\nOriginal List: ${list}\n`);

pop();

console.log(`\nList After Using Pop Function: ${list}`);