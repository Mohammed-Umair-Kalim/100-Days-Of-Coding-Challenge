// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a
// computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three
// specific skills from this list and show them.?

// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand
//  specific pieces of information.?

// Answer 53:
let computer_programmer = {
    languages:["\nTypescript","java","C++"],
    tools:["Anaconda","Vs Code","Git"],
    frameworks:["Angular","Flutter","SDK"]
}
console.log(computer_programmer.languages[0])
console.log(computer_programmer.tools[1])
console.log(computer_programmer.frameworks[2])