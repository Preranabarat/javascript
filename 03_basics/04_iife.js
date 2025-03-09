//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    console.log(`DB CONNECED`);    
} ) ();    //IIFE FUNCTION


(() => {
    console.log(`DB CONNECTED TWO`);
}) ()    // ARROW FUNCTION

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('prerana')   //with name