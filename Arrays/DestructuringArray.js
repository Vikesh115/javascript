/*
    Destructring Array
*/

// Rest parameter
const [courses, ...rest] = [["html", "css", "js"], 1, 2, 3];

console.log(rest);
console.log(courses);