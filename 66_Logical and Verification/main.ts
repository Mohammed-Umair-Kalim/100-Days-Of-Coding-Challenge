// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values.
// It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false)
// should be false.?

// Explain & TIP: The && operator in JavaScript checks if both sides are true.
// It's great for confirming several things are true all at once.

// Answer 66:
function bool(v1:boolean , v2:boolean){
    console.log(v1 && v2)
}

bool(false,true)
bool(true,true)
bool(true,false)