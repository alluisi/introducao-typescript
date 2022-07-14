"use strict";
let x = 10;
x = 12;
console.log(x);
let y = 12;
let z = 12;
let firtName = "Alessandra";
let age = 42;
const isAdmin = true;
console.log(typeof firtName);
firtName = "Aline";
const myNumbers = [1, 2, 3];
console.log(myNumbers.length);
console.log(firtName.toUpperCase());
myNumbers.push(4);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = {
    name: "Alessandra",
    age: 42
};
console.log(user);
console.log(user.name);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
const userId = 10;
const productId = "00001";
const shirId = 123;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
;
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa);
let teste;
teste = "algum valor";
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}!`;
}
console.log(sayHelloTo("Alessandra"));
function logger(msg) {
    console.log(msg);
}
logger("teste");
function greeting1(name, greet) {
    console.log(`Olá ${greet} ${name}`);
}
greeting1("Alessandra");
function greeting2(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting2("Alessandra");
greeting2("Alessandra", "senhora");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`A função do usuário é ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}
const ale = new User("Ale", "Admin", true);
console.log(ale);
ale.showUserName();
ale.showUserRole(false);
