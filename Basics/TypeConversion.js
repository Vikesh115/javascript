/*
    * Type conversions
    * to string
    * to number
    * to boolean
*/

let a = "12"
let b = "10"

let c = Number(a)
let d = Number(b)

let e = Boolean(a)
let f = Boolean("")

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log( e ); // String contains value so give true
console.log( f ); // String does not contain value so give false