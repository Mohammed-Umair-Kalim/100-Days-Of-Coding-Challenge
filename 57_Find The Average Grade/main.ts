// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.?

// Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average,
// giving us an idea of how well someone did overall?

// Answer 57:
let grade:number[] = [77,65,89,95,56,]

let avg_grade = grade.reduce((a,b) => a + b , 0) / grade.length

console.log(avg_grade)