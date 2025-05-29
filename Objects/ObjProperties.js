/*
*    objects --> {key:value}
*/

// object literal
let obj = {
    name: "vikesh",
    age: 99,
    courses: ["html", "css", "js", "react"],
    "is admin": true
};
console.log(typeof obj);

console.log(obj.name);
console.log(obj.age);

console.log(obj["courses"]);
console.log(obj["is admin"]);