let myDate = new Date()
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("2023-01-14") //yyyy-mm-dd
let myCreatedDate = new Date("01-14-2023") //mm-dd-yyyy
console.log(myCreatedDate.toLocaleString());

let myTimeStamp =Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());//startig with 0
console.log(newDate.getDate());

console.log(`${ newDate.getDay()} and the time is ${newDate.getTime()}`);

newDate.toLocaleString('default',{
    weekday: "long",
    //timezone:
})