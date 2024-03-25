"use strict";
// Q 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details.
// Include its brand, model, and other key features like how much storage it has, the size of its screen,
// and how long its battery lasts.?
// Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects.
// This helps organize related information neatly ?
// Answer 52:
let smartphone = {
    brand: "Huawei",
    model: "p30 lite",
    specs: {
        screenSize: 6.5,
        processor: "octa core",
        graphic_processor_unit: "mediatek"
    }
};
console.log(smartphone);
