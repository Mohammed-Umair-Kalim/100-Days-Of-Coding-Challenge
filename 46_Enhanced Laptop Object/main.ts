// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, 
// year,
// and a method describe() that logs a sentence about the laptop?

// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's
// properties. This introduces method definition within objects?

// Answer 46:

let laptop = {
    make:"HP",
    model:"Elite",
    year:2022,
    
    describe:function(){
        console.log(`\nThis is a ${this.make} brand laptop its model is ${this.model}
        and it was released on ${this.year}`)
    }
}

laptop.describe()