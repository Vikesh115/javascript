/*
*    Functions as object property
*/

const obj ={
    name:"vikesh",
    greetmsg: function (){
        console.log("Hi, my name is vikesh");
    },
    bye(){
        console.log("bye!!");
    }
}

console.log(obj.name);
obj.greetmsg();
obj.bye();