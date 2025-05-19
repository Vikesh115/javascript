const person = {
    name: 'Alice',
    greet() {
        console.log("Function Context : ", this); // refer to person object
        console.log(`Hello, ${this.name}`);
    }
};
person.greet();
console.log("Global Context : ", this); // refer to window object

const obj = {
    name: 'Alice',
    regularFunc: function () {
        console.log(this); // refer to obj object
        console.log(this.name); // "Alice"
    },
    arrowFunc: () => {
        console.log(this); // refer to window object 
        console.log(this.name); // undefined (inherits from outer scope)
    }
};

obj.regularFunc()
obj.arrowFunc()