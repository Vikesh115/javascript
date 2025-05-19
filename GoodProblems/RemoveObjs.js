const removeDuplicatesByName = (arr) => {
    return arr.filter((obj, index, self) => {
        // Find the first occurrence of the current object's name
        const firstIndex = self.findIndex(o => o.name === obj.name);
        // Keep only if the current index matches the first occurrence index
        return index === firstIndex;
    });
};

// Example usage:
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Alice" }, // Duplicate name
    { id: 4, name: "Charlie" },
    { id: 5, name: "Bob" },   // Duplicate name
];

const uniqueUsers = removeDuplicatesByName(users);
console.log(uniqueUsers);