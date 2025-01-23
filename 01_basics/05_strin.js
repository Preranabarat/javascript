const name ="Prerana"
const repoCount = 5

// console.log(name+ repoCount +" value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('prerana')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString =gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-7,4)
console.log(anotherString);

const newStringOne =" prerana "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://avradip.com/avradip%20kundu"
console.log(url.replace('%20','-'));
console.log(url.includes('avradip'));
console.log(url.includes('ak'));

const gameNameOne ="avradip-ak-ak"
console.log(gameNameOne.split('-'));

const emptyString="";
console.log(emptyString.split("a"));
console.log(emptyString.split(emptyString));

