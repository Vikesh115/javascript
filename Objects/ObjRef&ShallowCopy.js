/**
 * Object Reference & Shallow copy
*/

const person1 = {
    name:"Gaurav",
    age:100,
    address:{
        city:"rajgir",
        state:"GT"
    }
}

// const person2 = person1; // Shallow copy
const person2 = Object.assign({}, person1) // deep copy at 1 level not with nested.

person2.name = "Ashish"
person1.age = 112
person2.address.city = "Patna"

console.log(person1);
console.log(person2);