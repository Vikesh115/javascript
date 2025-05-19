const original = [1, 2, { name: 'Alice' }];
const copy = [...original];
// ************** Shallow copy *************

// Changing primitive values affects only the copy
copy[0] = 100;
console.log(original[0]); // 1 (unchanged)
console.log(copy[0]);     // 100

// Changing objects affects both arrays!
copy[2].name = 'Bob';
console.log(original[2].name); // 'Bob' (changed)
console.log(copy[2].name);     // 'Bob'

// ************** Deep copy *************
const original1 = [1, 2, { name: 'Alice' }];
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy[2].name = 'Bob';
console.log(original1[2].name); // 'Alice' (unchanged)
console.log(deepCopy[2].name); // 'Bob'