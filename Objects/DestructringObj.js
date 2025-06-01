/**
 * Destructring Object
*/

const obj = {
    name: 'Prakash',
    address: {
        street: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra'
    },
    courses: ['JavaScript', 'React', 'Node.js']
};

const { name, address, courses } = obj;
console.log(name); // Output: Prakash
console.log(address); // Output: { street: '123 Main St', city: 'Mumbai', state: 'Maharashtra' }
console.log(courses); // Output: ['JavaScript', 'React', 'Node.js']

const { address: { city, state } } = obj;
console.log(city); // Output: Mumbai
console.log(state); // Output: Maharashtra

const { name: userName, address: { city: userCity } } = obj;
console.log(userName); // Output: Prakash
console.log(userCity); // Output: Mumbai