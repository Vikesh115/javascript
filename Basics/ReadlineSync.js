// node.js should be installed in machine;
// install using npm package manager
// so, npm i readline-sync in terminal

const readlinesync = require("readline-sync");

let userName = readlinesync.question("May i know your name? ");
let userAge = readlinesync.question("May i know your age? ")

let bornYear = 2025 - Number(userAge)

console.log(`Hi ${userName},Welcome to my family.`);
console.log(`You are ${userAge} years old. `);
console.log(`You were born in year ${bornYear}. `)