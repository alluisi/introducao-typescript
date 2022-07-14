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

// type alias
type myIdType = number | string;
const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
};
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa);

// literal types
let teste: "algum valor" | null;
// teste = "outro valor";
teste = "algum valor";
teste = null;

// funções
function sum(a: number, b:number) {
    return a + b;
}
console.log(sum(12, 12));
// console.log(sum("12", true));
function sayHelloTo(name: string): string {
    return `Hello ${name}!`;
}
console.log(sayHelloTo("Alessandra"));
function logger(msg: string): void { // void -> quando a função não retorna nada
    console.log(msg);
}
logger("teste");
function greeting1(name: string, greet?: string) { // ? -> torna o parâmetro opcional
    console.log(`Olá ${greet} ${name}`);
}
greeting1("Alessandra"); // Olá undefined Alessandra
// tratando a função
function greeting2(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting2("Alessandra"); // Olá Alessandra
greeting2("Alessandra", "senhora"); // Olá senhora Alessandra

// interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}
function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({n1: 1, n2: 2}));
function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}
const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));

// narrowing
// checagem de tipo
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);

// generics
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    })
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);

// classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean): void {
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

// interfaces em classes
interface IVehicle {
    brand: string
    showBrand(): void
}
class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();