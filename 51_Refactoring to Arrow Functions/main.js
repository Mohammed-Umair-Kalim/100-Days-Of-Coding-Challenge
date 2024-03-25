"use strict";
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle
// and refactor it into an arrow function ?
// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript,
// making your code cleaner and more readable.?
Object.defineProperty(exports, "__esModule", { value: true });
// Answer 51:
// function for area of rectangle:
function calculateArea(width, height) {
    return width * height;
}
// Arrow function for area of rectangle:
let calculateAreaArrow = (width, height) => {
    return width * height;
};
console.log(calculateAreaArrow(4, 2));
