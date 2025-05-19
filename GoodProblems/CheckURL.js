// Using the URL Constructor(Modern Approach)
// javascript
function isValidUrl(urlString) {
    try {
        new URL(urlString);
        return true;
    } catch (e) {
        return false;
    }
}

// Examples
console.log(isValidUrl("http://www.amazon.in")); // true
console.log(isValidUrl("ftp://example.com"));    // true
console.log(isValidUrl("amazon.in")); 