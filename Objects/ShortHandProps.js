/* 
 * Short hand properties 
*/

function getObjects(name,age){
    return{
        name,
        age
    }
}

const s1 = getObjects("Raut", 100)
console.log(s1);

const s2 = getObjects("ashish", 99)
console.log(s2);

const student = "Harsh";
const course = "Redux";

console.log({student, course});