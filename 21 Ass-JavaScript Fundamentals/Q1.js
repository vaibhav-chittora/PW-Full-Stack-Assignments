function outerFunction(param) {
    // param = 1;
    console.log("Outer Function -");
    let outerVar = "I am declared in Outer function"
    function innerFunction() {
        // console.log("Inner Function");
        console.log("Parameter of Outer Function passed are only:", param);
        console.log("Variable declared in outer function:",outerVar);
    }
    return innerFunction;
}

let myOwnFunction = outerFunction(1);
myOwnFunction()
