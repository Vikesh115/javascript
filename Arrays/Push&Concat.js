/*
    Array methods --> push & concat
*/

/* Mutable(Changed) OR Immutable(Not-changed)*/

/* Changed original array */
let arr1 = ['asgish', 'aditya'];
console.log(arr1);
arr1.push('aryan');
console.log(arr1);

/* Not changed original array */
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8]
let array4 = array1.concat(array2, array3);
console.log(array4);
console.log(array1);