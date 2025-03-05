const user ={
    username : "prerana",
    price : 5999,
    welcomeMassage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
} 
// user.welcomeMassage()   
// user.username="sam"
// user.welcomeMassage() 

// console.log(this);

// function chai(){
//     // let username="prerana"
//     console.log(this);
    
// }
// chai()



// ++++++++++arrow+++++++

const chai =  () => {
    let username ="prerana"
    console.log(this);
    
}
chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2   //  explicit return
// }
// const addTwo = (num1,num2) => num1 + num2
  
const addTwo = (num1,num2) => ( num1 + num2 )   //implicit return

console.log(addTwo(3,4));



