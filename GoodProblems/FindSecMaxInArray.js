function findSecondMax(arr) {
    if (arr.length < 2) return null; // Edge case: array too small

    let max1 = -Infinity; // Largest
    let max2 = -Infinity; // Second largest

    for (let num of arr) {
        if (num > max1) {
            max2 = max1; // Old max1 becomes max2
            max1 = num;  // New max1
        } else if (num > max2 && num !== max1) {
            max2 = num; // Update max2 only if num is between max1 and max2
        }
    }

    return max2 === -Infinity ? null : max2; // If no second max exists
}

// Example Usage
const arr = [12, 35, 1, 10, 34, 1];
console.log(findSecondMax(arr)); // Output: 34