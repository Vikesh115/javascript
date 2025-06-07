/*
 * Binding refers to how the this keyword gets its value in a function. 
 * It determines what object this refers to when a function is executed.
*/

// Immediately invokes the function with a specified 
// this value and arguments passed individually.

function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

const person = {
    name: 'Bob'
};

greet.call(person); // "Hello, my name is Bob" - explicit binding

// Similar to call() but accepts arguments as an array.
function introduce(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person1 = {
    name: 'Charlie'
};

introduce.apply(person1, ['Hi', '!']); // "Hi, my name is Charlie!"

// Returns a new function with this bound to a specific object, 
// without immediately invoking it.
function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

const person2 = {
    name: 'Dave'
};
const boundGreet = greet.bind(person2);

boundGreet(); // "Hello, my name is Dave"