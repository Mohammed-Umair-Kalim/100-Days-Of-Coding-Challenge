// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops,
// each with properties make, model, and year, use array destructuring to assign the first and second laptops
// to variables. Then, log these variables?
// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects,
// simplifying access to complex data structures?

// Answer 47:
let laptop = [
    {make:"hp",model:"pro",year:2020},
    {make:"dell",model:"inspirion",year:2018},
    {make:"lenevo",model:"thinkpad",year:2023},
]

let [laptop1 , laptop2] = laptop
console.log(laptop2)
console.log(laptop1)
