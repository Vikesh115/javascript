/*
* Adding a new property
* Computed property
*/

const readlinesync = require("readline-sync");

const key = readlinesync.question("what do you want to know name/age/state/city - ")
const course = readlinesync.question("What do you want to learn html/css/js - ");

const obj = {
    name:"Raut",
    age:100,
    [course]:"Not availble"
}

obj.state = "BR";
obj.city = "Madhubani";

console.log(obj[key]);
console.log(obj[course]);