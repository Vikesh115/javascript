function reverseWords(str) {
    let reversedStr = '';
    let word = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            // Build the word character by character
            word = str[i] + word; // Prepend to reverse
        } else {
            // When space is found, add the reversed word to result
            reversedStr += word + ' ';
            word = ''; // Reset for next word
        }
    }

    // Add the last reversed word (no space after it)
    reversedStr += word;

    return reversedStr;
}

// Example usage
const input = "Hello World JavaScript";
const output = reverseWords(input);
console.log(output); // "olleH dlroW tpircSavaJ"