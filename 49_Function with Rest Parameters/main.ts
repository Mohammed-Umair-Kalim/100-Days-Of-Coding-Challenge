// Q49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
// It should log each hobby with a statement saying you enjoy that hobby?
// Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array,
// providing a way to handle multiple inputs gracefully ?

// Answer 49:

// Function:
function my_hobbies(...hobbies:string[]) : void {
    
    hobbies.forEach(hobby => {console.log(`\nI enjoy ${hobby}`)})   
}
// calling function:
my_hobbies("skydiving","swimming","driving")
