
function sumThreeDigits(number) {
    // Ensure it's a three-digit number
    if (number < 100 || number > 999) {
        return "Please enter a valid three-digit number";
    }

    const hundreds = Math.floor(number / 100); // Quotient
    const tens = Math.floor((number % 100) / 10); // remainder then quotient
    const units = number % 10; // remainder

    // Calculate and return the sum
    return hundreds + tens + units;
}

console.log(sumThreeDigits(123)); // Output: 6 (1 + 2 + 3)

// ************************ or *********************
function sumThreeDigit(number) {
    const digits = String(number).split('');
    
    if (digits.length !== 3) {
        return "Please enter a valid three-digit number";
    }
    
    return digits.reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumThreeDigit(999)); // Output: 27 (9 + 9 + 9)
