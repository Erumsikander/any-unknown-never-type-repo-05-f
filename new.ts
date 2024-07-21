

// any unknown never types and explict casting..!

// Any type..!

let name : any = "Erum Sikander";

name = true;

console.log(name.toUppercase());  // result = error because to use any 

// Unknown type ..!

let name1 : unknown = "Ahmed Hassan";
// Explicit castingtype = to change the type of value

console.log((name1 as string).toUpperCase()); // result = okk
name1 = true;
