// console.log(a);
// console.log(b);
// console.log(c);
// var a = 12;
// const b = 13;
// let c = 11;
// c = 1111
// b = 2213131
// console.log(c);
// console.log(a);
// console.log(b);

// const obj = {
// name: "Alice",
//   badMethod: () => console.log(this.name), // ❌ `this` = window
//   goodMethod() { console.log(this.name); } // ✅ `this` = obj
// };
// obj.badMethod();
// obj.goodMethod();

const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

shallowCopy.b.c = 99; // Mutates nested object
console.log(original.b.c); // 99 (❗original changed)

// const original = { a: 1, b: { c: 2 } };
// const deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy.b.c = 99;
// console.log(original.b.c); // 2 (✅ original unchanged)

// foo(); // ✅ Works (regular function)
// function foo() {}

// bar(); // ❌ Error (arrow function)
// const bar = () => {};

// function regular() {
//   console.log(arguments); // Arguments(3) [1, 2, 3]
// }

// const arrow = (...args) => {
//   console.log(args); // [1, 2, 3] (rest parameters)
// };

// regular(1, 2, 3);
// arrow(1, 2, 3);

// const fruits = ['🍎', '🍌', '🍊', '🍓'];

// const citrus = fruits.slice(1, 3); // Extracts index 1 to 2
// console.log(citrus); // ['🍌', '🍊']
// console.log(fruits); // Original unchanged: ['🍎', '🍌', '🍊', '🍓']

// const fruitss = ['🍎', '🍌', '🍊', '🍓'];
// const removed = fruitss.splice(1, 2); // Removes 2 items starting at index 1

// console.log(removed); // ['🍌', '🍊']
// console.log(fruits); // Original modified: ['🍎', '🍓']

// const numbers = [10, 20, 30, 4, 909, 900];

// let maxEven = -Infinity;
// for (const num of numbers) {
//     if (num % 2 === 0 && num > maxEven) {
//         maxEven = num;
//     }
// }
// console.log(maxEven); // Output: 900

// function outer() {
//     const outerVar = "I'm outside!";

//     function inner() {
//         console.log(outerVar); // Accesses outerVar
//     }

//     return inner; // Returns the inner function
// }

// const myClosure = outer(); // outer() finishes executing...
// myClosure(); // Logs: "I'm outside!" (still remembers outerVar)