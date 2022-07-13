// string, boolean, number...
let x: number = 10;
// x = "teste";
x = 12;
console.log(x);

// inferência X annotation
let y = 12; // inferência
// y = "teste";
let z: number = 12; // anotation

// tipos básicos
let firtName: string = "Alessandra";
let age: number = 42;
const isAdmin: boolean = true;
// String != string (usar minúscula)
console.log(typeof firtName);
firtName = "Aline";

// object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase());
console.log(firtName.toUpperCase());
myNumbers.push(4);
console.log(myNumbers);

// tuplas -> tuple
let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true};

// object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "Alessandra",
    age: 42
};
console.log(user);
console.log(user.name);
// user.job = "programadora";

// any (evitar usar)
let a: any = 0;
a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10";
id = 200;
// id = true;
// id = [];