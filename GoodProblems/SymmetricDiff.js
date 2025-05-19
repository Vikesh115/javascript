function symmetricDifference(arr1, arr2, key = 'id') {
    const ids1 = new Set(arr1.map(obj => obj[key]));
    const ids2 = new Set(arr2.map(obj => obj[key]));

    const diff1 = arr1.filter(obj => !ids2.has(obj[key]));
    const diff2 = arr2.filter(obj => !ids1.has(obj[key]));

    return [...diff1, ...diff2];
}

const arrOne = [{ id: 20, name: 'alex' }, { id: 30, name: 'alina' }] 
const arrTwo = [{ id: 40, name: 'hello' }, { id: 30, name: 'world' } ]

const result = symmetricDifference(arrOne, arrTwo);
console.log(result);
// Output: [{ id: 20, name: 'alex' }, { id: 40, name: 'hello' }]