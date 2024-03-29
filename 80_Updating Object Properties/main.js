"use strict";
// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then
// update the year property to 2021. Show how to perform these operations.?
// Explain & TIP: You can add new properties to an object or change existing ones after the object is created.
// This flexibility allows objects to be dynamically updated as needed
// Answer 80:
let car = {
    make: "Toyota",
    model: "Indus",
    year: 2018
};
// Adding new property to a car object:
car.color = "\nGold";
console.log(car.color);
// updating car year:
car.year = 2021;
console.log(car.year);
