// primitive
//  7 types :- string, Number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
console.log(typeof scoreValue);
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1223357835623n

// reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","nagraj","doga"];
let obj = {
    name: "priyanshu",
    age: 24,
}

console.log(obj.name);
console.log(obj);
console.log(obj.age);




const myFunction = function(){
    console.log("hello world")
}
myFunction();


