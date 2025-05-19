// Spread operator
// Unpack the array
// Avoid mutating means does not change original array

let arr = [1, 2, 3, 4];
console.log(...arr); // 1 2 3 4

let arr1 = [4, 5, 6];
let arr2 = [8, 9, 10];

console.log(...arr1, ...arr2);
console.log(arr1);