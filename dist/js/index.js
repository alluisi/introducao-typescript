"use strict";
// string, boolean, number...
let x = 10;
// x = "teste";
x = 12;
console.log(x);
// inferência X annotation
let y = 12; // inferência
// y = "teste";
let z = 12; // anotation
// tipos básicos
let firtName = "Alessandra";
let age = 42;
const isAdmin = true;
// String != string (usar minúscula)
console.log(typeof firtName);
firtName = "Aline";
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase());
console.log(firtName.toUpperCase());
myNumbers.push(4);
console.log(myNumbers);
// tuplas -> tuple
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true};
