/*
    Anonymous function
*/

// Unnamed anonymous function
// let anonymousfunc = function() {
//     console.log('Hi, my name is vikesh.');
// }

// Named anonymous function
// anonymousfunc() is global function.
// greetings() is local function.
let anonymousfunc = function greetings() {
    console.log('Hi, my name is vikesh.'); // Hi, my name is vikesh.
    console.log(typeof greetings); // function
}

console.log(typeof anonymousfunc); // function

anonymousfunc()