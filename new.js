"use strict";
// any unknown never types and explict casting..!
Object.defineProperty(exports, "__esModule", { value: true });
// Any type..!
let name = "Erum Sikander";
name = true;
console.log(name.toUppercase()); // result = error because to use any 
// Unknown type ..!
let name1 = "Ahmed Hassan";
// Explicit castingtype = to change the type of value
console.log(name1.toUpperCase()); // result = okk
name1 = true;
