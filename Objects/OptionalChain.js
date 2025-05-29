/**
 * Optional chaining ?.
*/

const user = {
    name: "vikesh",
    address: {
        city: "BR",
        country: "IND"
    },
    greetmsg: function(){
        console.log("Hi, vikesh");
    }
}

// user.greetmsg()
console.log(user.getcourse?.());

// // sol 1
// if(user.address !== undefined){
//     console.log(user.address.city);
// }else{
//     console.log("Not available");
// }

// // sol 2
// console.log(user["address"]["city1"]?.["name"]);