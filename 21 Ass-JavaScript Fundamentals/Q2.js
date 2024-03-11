function regex(pattern, str) {

    return pattern.test(str)
}
let result = regex(/[a-z][0-9]/, "Vaibhav543!!@");
console.log(result);