//primitive
//7 types: String,Number,Boolean,Null,Undefined,Symbol,BigIint
const id =Symbol("123");
const anotherId = Symbol("123");

console.log(id===anotherId);

const BigInt = 2343657836748632n

// Reference (Non primitive)
// Array, Objects, Functions

const heros=["shaktiman","naagraj","doga"];
// console.log(heros);

let myObj={
    name:"mylove",
    age:21,
}
// console.log(myObj);

const myfunction =function(){
    console.log("hello world");
}
// console.log(myfunction);
// console.log(typeof heros);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack memory(primitive) || Heap memory(Non-primitive)

let myYoutubename ="preranabarat";
let anotherName = myYoutubename;
anotherName = "chai or avra";

console.log(myYoutubename);
console.log(anotherName);

let userOne ={
    email:"user@gmail.com",
    upi: "user@ybl"
}
let userTwo= userOne
userTwo.email="ap@gmail.com"

console.log(typeof userOne);
console.log(userOne.email);
console.log(userTwo.email);