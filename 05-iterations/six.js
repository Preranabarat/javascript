// const coding=["js","rb","py","java","cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);


// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const nweNums= myNums.filter((num) =>{
//     return num > 4 
// })

// console.log(nweNums);

// const nweNums =[]

// myNums.forEach((num)=>{
//     if(num > 4){
//         nweNums.push(num)
//     }
// })
// console.log(nweNums);

//++++++++++++++++++++ example +++++++++++++++++++++++

const books =[
    { titel: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { titel: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { titel: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { titel: 'Book Four', genre: 'Fiction', publish: 1981, edition: 2010},
    { titel: 'Book Five', genre: 'Science', publish: 1981, edition: 2014},
    { titel: 'Book Six', genre: 'Fiction', publish: 1981, edition: 2024},
    { titel: 'Book Saven', genre: 'History', publish: 1981, edition: 2016},
    { titel: 'Book Eight', genre: 'Science', publish: 1981, edition: 1996},
    { titel: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 2016},
];
let userBooks = books.filter((bk) => bk.genre === 'History')
userBooks = books.filter((bk) => {
    return bk.publish >= 1900 && bk.genre === 'History'
})

console.log(userBooks);
 
