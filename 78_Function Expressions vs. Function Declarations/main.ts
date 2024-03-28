// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations
// by creating one of each that performs the same task, such as squaring a number.?

// Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function
// and can be called before they're defined, and expressions that are stored in variables and are called using
// the variable name.

// Answer 78:
function squaring (num1:number , num2:number){
    console.log(num1 * num2)
}
squaring(4,4)

let sq = (number1:number , number2:number):number =>{
    return number1 * number2
}
console.log(sq(5,5))

let sqNumber = function squaring (num1:number , num2:number){
    console.log(num1 * num2)
}
sqNumber(6,6)