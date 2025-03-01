function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("E");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
}
// sayMyName()


// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumber(3,4)


function addTwoNumber(num1,num2){
   
    // let result =num1+num2
    // return result
    // console.log("prerana");//after return key word never executed console log
    return num1+num2
}
const result = addTwoNumber(3,4)
// console.log("result",result);

function loginUserMessage(username="sam"){
    if(!username){
    // if(username === undefined){
       console.log("plese enter your username");
       return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Prerana"));//override
// console.log(loginUserMessage());//umdefined

