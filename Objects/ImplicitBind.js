const person = {
    name: 'Alice',
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // "Hello, my name is Alice" - implicit binding