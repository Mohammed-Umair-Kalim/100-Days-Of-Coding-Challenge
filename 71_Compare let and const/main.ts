// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not.
// Try to reassign a const-declared variable and catch the error ?

// Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables
// that should not change once set. Using const helps make your code safer and more predictable.

// Answer 71:

let nam_e = "\nMohammed Umair\n";
console.log(nam_e);

nam_e = "Umair\n";
console.log(nam_e);

const n_ame = "Mohammed Umair";
console.log(n_ame)

// cannot re-assign const variable:

// n_ame = "Umair"
