/*
    Destructring Array
*/

const numbers = [1, 2, 3, ["html", "css", "js"]]
const [a, b, c, courses] = numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(courses);

let a1 = 10;
let b1 = 20;

[b1, a1] = [a1, b1];
console.log(a1); // 20
console.log(b1); // 10

let ar = [a1,b1]
console.log(ar);

// Rest parameter
// const [courses, ...rest] = [["html", "css", "js"], 1, 2, 3];

// console.log(rest);
// console.log(courses);