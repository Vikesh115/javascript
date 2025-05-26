//Creating an Array
let studentNames = ["Prakash", "Ashish", "Via", "Adarsh"];
console.log(studentNames); // Output: ["Prakash", "Ashish", "Via", "Adarsh"]

//Adding Different Types of Data
let mixedArray = ["Prakash", 42, [1, 2, 3], { schoolName: "SIES" }];
console.log(mixedArray);
// Output: ["Prakash", 42, [1, 2, 3], { schoolName: "SIES" }]

//Accessing Array Elements
console.log(studentNames[0]); // Output: "Prakash"
console.log(studentNames[1]); // Output: "Ashish"

//Using a For Loop
for (let name of studentNames) {
    console.log(name);
}
// Output: "Prakash", "Ashish", "Via", "Adarsh"

//Using a For-In Loop
for (let index in studentNames) {
    console.log(studentNames[index]);
}
// Output: "Prakash", "Ashish", "Via", "Adarsh"

// Modifying Arrays
// Adding Elements
studentNames.push("Piyush");
console.log(studentNames);
// Output: ["Prakash", "Ashish", "Via", "Adarsh", "Piyush"]

//Removing Elements
studentNames.pop(); // Removes the last element
console.log(studentNames);
// Output: ["Prakash", "Ashish", "Via", "Adarsh"]

studentNames.shift(); // Removes the first element
console.log(studentNames);
// Output: ["Ashish", "Via", "Adarsh"]

studentNames.splice(1, 1); // Removes one element at index 1
console.log(studentNames);
// Output: ["Ashish", "Adarsh"]

//Array Methods
//map()
// Creates a new array with the results of calling a function for every array element:
let upperCaseNames = studentNames.map(name => name.toUpperCase());
console.log(upperCaseNames); // Output: ["ASHISH", "ADARSH"]

// filter()
// Creates a new array with elements that pass a test provided by a function:
let longNames = studentNames.filter(name => name.length > 5);
console.log(longNames); // Output: ["Ashish", "Adarsh"]

// Using Reduce
//It is used to reduce the array into one single value using some functional logic
array = [1, 2, 3, 4, 5, 6];

const helperSum = (acc, curr) => acc + curr
sum = array.reduce(helperSum, 0);

console.log(array)
console.log(sum);

//Using Some
// It is used to check whether some array values passes a test
array = [1, 2, 3, 4, 5, 6];

const lessthanFourCheck = (element) => element < 4;
const lessthanFour = array.some(lessthanFourCheck)


console.log(array);
if (lessthanFour) {
    console.log("At least one element is less than 4")
} else {
    console.log("All elements are greater than 4 ")
}


