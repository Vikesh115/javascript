/*
    split() & join() methods
*/

let inputstr = 'madam';
const arrOfChar = inputstr.split("")
console.log(arrOfChar);
arrOfChar.reverse()
console.log(arrOfChar);
const revStr = arrOfChar.join("");
console.log(revStr);

if(revStr === inputstr){
    console.log("Palindrome");
}else{
    console.log("No palindrome");
}