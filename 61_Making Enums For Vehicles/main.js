"use strict";
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles
// using enums, and show one example.?
// Explain & TIP: Enums are like special lists in your code that help you categorize things.
// They make your code cleaner and easier to understand
// Answer 61:
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Car"] = 0] = "Car";
    Vehicles[Vehicles["Truck"] = 1] = "Truck";
    Vehicles[Vehicles["Motorcycle"] = 2] = "Motorcycle";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles.Car);
