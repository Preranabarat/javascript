const myArr = [0,1,2,3,4,5,true,"prerana", "avra"]
console.log(myArr[6]);

const myHeros = ["avra","rohan"]
const myArr2 = new Array(1,2,3,4)
console.log(typeof myArr2);
console.log(myHeros[1]);
console.log(myArr2[1]);

// Array method

myArr.push("ap")   //push the element into array
console.log(myArr);
 
myArr.pop()     //remove the element from array which is added im the last element 
console.log(myArr);

myArr.unshift(9)   //insert the element of 1st position into array
console.log(myArr);

myArr.shift()             //remove the element
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.includes(3));

console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArr =myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 =myArr.splice(1,3)
console.log("c ",myArr);
console.log(myn2);

