// for in 


const myObject ={
    js: "javaScript",
    cpp: "c++",
    rb: "ruby",
    java: "java",
    py: "pythan"
}

for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);
    
}

const programming =["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
    
}