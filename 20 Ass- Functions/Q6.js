function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        }
        return (...moreArgs) => curried(...args, ...moreArgs);
    };
}
function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);
console.log(curriedAdd(2)(3)); // Output: 5
