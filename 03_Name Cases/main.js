// Q3: Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase?
//Answer3:
//Variable:
let person = "mohAmmeD uMAir kalim";
//Upper Case:
console.log("Upper case:", person.toUpperCase());
//Lower Case:
console.log("Lower case:", person.toLowerCase());
//Title Case:
let toTitleCase = person.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
console.log("Title case:", toTitleCase);
export {};
