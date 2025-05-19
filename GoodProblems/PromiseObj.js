const myObject = {
    property1: 'value1',
    property2: 'value2',
    property3: 42,

    getPropertiesDelayed() {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Create an object with all properties of myObject except the method itself
                const properties = {
                    property1: this.property1,
                    property2: this.property2,
                    property3: this.property3
                };
                resolve(properties);
            }, 2000); // 2-second delay
        });
    }
};

// Example usage:
myObject.getPropertiesDelayed()
    .then(properties => {
        console.log('Resolved properties:', properties);
        // After 2 seconds, logs:
        // Resolved properties: {property1: "value1", property2: "value2", property3: 42}
    });