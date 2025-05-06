// Conditional statements

const readlinesync = require('readline-sync')

const number = readlinesync.question("Enter a number? ")

const remainderOfThree = number % 3;
const remainderOfFive = number % 5;

if (remainderOfThree === 0 && remainderOfFive !== 0) {
    console.log('Fizzz');
} else if (remainderOfFive === 0 && remainderOfThree !== 0) {
    console.log('Buzzz');
} else if (remainderOfFive === 0 && remainderOfThree === 0) {
    console.log('FizzBuzz');
} else {
    console.log('Try again');
}