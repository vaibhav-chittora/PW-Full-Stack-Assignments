// Calculator object
var Calculator = {
    result: 0,
    
    // Method to add numbers
    add: function(num) {
        this.result += num;
        return this;
    },
    
    // Method to subtract numbers
    subtract: function(num) {
        this.result -= num;
        return this;
    },
    
    // Method to multiply numbers
    multiply: function(num) {
        this.result *= num;
        return this;
    },
    
    // Method to divide numbers
    divide: function(num) {
        if (num !== 0) {
            this.result /= num;
        } else {
            console.log("Error: Division by zero.");
        }
        return this;
    },
    
    // Method to get the current result
    getResult: function() {
        return this.result;
    }
};

// Demonstration of method chaining
var result = Calculator.add(5).subtract(3).multiply(4).divide(2).getResult();
console.log("Result:", result); // Output: Result: 8
