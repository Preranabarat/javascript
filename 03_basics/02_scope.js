// var c=300
let a =300
if(true){//scope
    let a =10
    const b =20
    var c =30
    // console.log("INNER",a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);//var declare then...print 30 not print 300 

function one(){
    const username="prerana"

    function two(){
        const website ="youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()
if(true){
    const username ="prerana"
    if(username==="prerana"){
        const website =" youtube"
        // console.log(username + website);
    }
}

// +++++++++++++++ interesting +++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

const addTwo =function(num){
      return num + 2

}
console.log(addTwo(5))

 