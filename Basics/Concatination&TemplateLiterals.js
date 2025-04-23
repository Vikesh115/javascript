/*
    Concatination
    Tempelate literals/strings
*/

let userName = "Vikesh";
let age = 99;

let info = "My name is " + userName + " and i am " + age +" years old."
console.log(info);

let newInfo = `My name is ${userName} and i am ${age} years old.`
console.log(newInfo);
// Concatinate and Template Literal give same output but redability is different.

let multilinetext = `My name is ${userName}
i am ${age} years old
i love to code
i love to eat
i love to sing`
console.log(multilinetext);