/*
    Array --> Non-primitive data type
*/

let s1 = "Prakash";
let s2 = "Ashish";
let s3 = "Adarsh";
let s4 = "Aditya";

// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(s4);

let studentArray = ['Prakash', 'Ashish', 'Adarsh', 'Aditya']; // Replace multiple vars
// console.log(studentArray[0]);
// console.log(studentArray[1]);
// console.log(studentArray[2]);
// console.log(studentArray[3]);

/* for loop --> replace multiple logs to print array names */

// for(let i=0; i<studentArray.length; i++){
//     console.log(studentArray[i]);
// }

/* for let of */

// for(let name of studentArray){
//     console.log(name);
// }

/* for let in */

for(let index in studentArray){
    console.log(studentArray[index]);
}