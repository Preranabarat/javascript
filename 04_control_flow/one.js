// // if
// const isUserLoggedIn = true
// const temperature = 41

// if(temperature===41){
//     console.log("temperature less than 50");
// }
// else{
//     console.log("greater than 50");
// }
// // console.log(typeof(temperature));

// //comparison operator
// // ==, !=, <, >, <=, >=, ===

// // block scope
// const score =200
// if(score > 100){
//     let power = "fly";
//     console.log(`user power: ${power}`);
// }
// // console.log(`user power:${power}`);

// const balance =1000
// if(balance>500) console.log("test"),console.log("test2");

// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");    
// }


const UserLoggedIn =true
const debitCard=true
if(UserLoggedIn && debitCard){
    console.log("Allow to buy course");
}

const LoggedInFromGoogle = false
const loggedInFromEmail =true
if(LoggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");    
}