/**
 * For in 
 */

let obj = {
    name:"Vikesh",
    city:"BR"
}

let isPropsAvl = "name" in obj;
// console.log(isPropsAvl);

for(let key in obj){
    console.log(key, obj[key]);
}