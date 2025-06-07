/* 1 */

// function displayname(){
//     console.log(this);
// }

// const user1 = {
//     name: "Vikesh",
//     showName: displayname,
// }

// console.log(user1);// this refer to user1 object
// user1.showName(); // this refer to user1 object

/* 2 */

// function displayname(){
//     console.log(this); //this refer to window object
// }

// const user2 = {
//     name: "Raut",
//     showName1: function(){
//         console.log(this); //this refer to user2 object
//         displayname();
//     }
// }

// user2.showName1()

/* 3 */
// const displayname = () => {
//     console.log(this); //this refer to window object, arrow function
// }

// const user3 = {
//     name: "Kumar"
// }

// displayname.apply(user3);

/* 4 */
// function User(){
//     console.log(this); //this refer to User{} object when call any function using new;
// }

// const user = new User();

/* 5 */
// const person = {
//     name:"Prakash",
//     sayHi: function(){
//         console.log(`Hi ${this.name}.`); //this refer to person object
//     }
// }

// person.sayHi();

/* 6 */
// const person = {
//     name:"Prakash",
//     sayHi: function(){
//         console.log(this);
//         console.log(`Welcome ${this.name}.`); //this refer to window object
//     }
// }

// let person1 = person.sayHi;
// person1();
// console.log(person1);