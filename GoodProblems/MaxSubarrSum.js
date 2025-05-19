function maxSubarraySum(arr) {
    if (arr.length === 0) return 0;
    
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }
    
    return maxGlobal;
}

// Example usage:
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 
// 6 (from subarray [4, -1, 2, 1])
console.log(maxSubarraySum([-1, -2, -3])); // -1 (single element)
console.log(maxSubarraySum([])); // 0 (empty array)
console.log(maxSubarraySum([5, 4, -1, 7, 8])); // 23 (entire array)