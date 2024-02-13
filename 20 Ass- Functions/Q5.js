const factorial = (num) => {
    if (num === 0) {
       return 1;
    }
    else if (num < 0) {
       return "Please enter a valid number!!";
    }
    else {
        return (num * factorial(num - 1))
    }
}
console.log(factorial(5)) // Output : 120