// ********** map() and reduce() method ********
function sortWithMapReduce(arr) {
    return arr
        .map(item => item) // Create a new array (optional shallow copy)
        .reduce((sorted, item) => {
            // Find the correct position to insert the new item
            let index = 0;
            while (index < sorted.length && sorted[index] < item) {
                index++;
            }
            // Insert the item at the found position
            sorted.splice(index, 0, item);
            return sorted;
        }, []);
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(sortWithMapReduce(numbers));

// *************** sort() **************
const arr = [3, 1, 5, 9, 2, 6];

const sorted = [...arr].sort((a, b) => a - b);
console.log(sorted);