const myNums =[1,2,3,4]

// const myTotal = myNums.reduce(function(accumLator,currentValue){
//     console.log(`acc: ${accumLator} and currval: ${currentValue}`);

//     return accumLator+currentValue
    
// },0)

const myTotal=myNums.reduce((acc,currval) => acc +currval,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName: "js course",
        price:2000
    },
    {
        itemName: "py course",
        price:1000
    },
    {
        itemName: "java course",
        price:4000
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay);

