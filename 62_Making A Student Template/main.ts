// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age,
//  and the classes they're taking, and then fill in this blueprint with an example student.?

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information,
// making your code more organized

// Answer 62:
interface Student {
    name:string,
    age:number,
    classes:string[]
}
let student:Student = {
    name:"Mohammed Umair",
    age:25,
    classes:["Typescript","Javascript","Python"]
}
console.log(student);