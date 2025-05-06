const studentIDs = new Array();

studentIDs.push(1);
studentIDs.push(2);
studentIDs.push(1);

console.log("Array : ",studentIDs); 
console.log("Array element : ", studentIDs[1]); // 2

// IDs should be unique so we use Set()
const studentIds = new Set();

studentIds.add(1);
studentIds.add(2);
studentIds.add(1);

console.log("Set : ",studentIds);
console.log('Set element : ', studentIds[1]); // undefined
// for Set element, convert Set to Array and Array to Set

const newStudentIds = [1,2,3,4,2,1,4];

const uniqueStudents = new Set(newStudentIds);

console.log("Array to Set : ",uniqueStudents);

const newArrayIds = [...uniqueStudents];

console.log("Set to Array : ",newArrayIds);

console.log(newArrayIds[2]);