function findCommonObjects(arr1, arr2) {
    const common = [];

    for (const obj1 of arr1) {
        for (const obj2 of arr2) {
            if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
                common.push(obj1);
                break;
            }
        }
    }

    return common;
}

const arr1 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Diana' }
];

const arr2 = [
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Diana' },
    { id: 5, name: 'Eve' },
    { id: 6, name: 'Frank' }
];

console.log(findCommonObjects(arr1, arr2));