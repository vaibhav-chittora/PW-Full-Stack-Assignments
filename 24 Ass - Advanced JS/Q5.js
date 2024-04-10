// Define the polyfill for customIncludes
if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(searchElement, fromIndex = 0) {
        // If fromIndex is greater than or equal to the length of the array, return false
        if (fromIndex >= this.length) {
            return false;
        }
        
        // Loop through the array starting from fromIndex
        for (let i = fromIndex; i < this.length; i++) {
            // If searchElement is found, return true
            if (this[i] === searchElement) {
                return true;
            }
        }
        
        // If searchElement is not found, return false
        return false;
    };
}

// Example usage
const arr = [1, 2, 3, 4, 5];
console.log(arr.customIncludes(3)); // Output: true
console.log(arr.customIncludes(6)); // Output: false
console.log(arr.customIncludes(3, 2)); // Output: true
console.log(arr.customIncludes(3, 4)); // Output: false
