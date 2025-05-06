/*
    Arrow function
*/

// const sum = function calSum(x,y){
//     return x+y;
// }

// const sum =  (x,y) => x+y;

// const sum = (x,y) => {
//     if(x>y){
//         return x+y;
//     }else{
//         return x-y;
//     }
// }

const sum = (x,y) => x>y ? x+y : x-y;

console.log(sum(12,15));