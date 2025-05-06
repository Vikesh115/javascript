/*
    Sum of numbers;
    (1-5) = 1+2+3+4+5 = 15
*/

const sum = (min, max) => {
    let sum = 0;
    for(let i=min; i<=max; i++){
        sum = sum+i
    }
    return sum;
}

console.log(sum(1, 5));
console.log(sum(1, 10));
console.log(sum(1, 15));