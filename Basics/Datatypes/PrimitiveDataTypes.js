/* 
    (Primitive) or (Immutable) data types in javascript
 */
/*
    String, Number, Undefined, Null, Boolean, BigInt and Symbol.
*/
/*
    Single value assigned to a variable.
*/
/*  Primitive values are immutable, meaning their values
    cannot be changed after they are created.
*/
/*
    When an operation appears to modify a primitive value, 
    it actually creates a new primitive value.
*/
/*
    These data types do not have methods or properties 
    and are directly stored in the location the variable accesses.
*/

// /** Number */ typeof --> number
let age = 80;
console.log(typeof age);

// /** String */  typeof --> string
let myName = "Vikesh";
console.log(typeof myName);

// /** Boolean */  typeof --> boolean
let isAddedToCart = false;
console.log(typeof isAddedToCart);

// /** Undefined */  typeof --> undefined
let myNumber;
console.log(typeof myNumber);

// /** Null */  typeof --> object
let result = null;
console.log(typeof result);
