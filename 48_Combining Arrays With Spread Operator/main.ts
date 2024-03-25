// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of
// laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order,
// then log the result.?
// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and
// manipulate arrays efficiently.?

// Answer 48:
let array1 = ["dell inspirion price = 80000rs"]
let array2 = ["aser swift go price = 60000rs"]
let array3 = [...array1 , ...array2].sort()
console.log(array3)