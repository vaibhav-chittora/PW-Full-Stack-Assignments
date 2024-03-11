function searchCharacterClass(pattern, str) {
    let regex = new RegExp(pattern, 'g');

    return [] || str.match(regex)

}
let testStr = "SKYisthelimit@789!!"
console.log("Digits", searchCharacterClass('\\d',testStr));
console.log("UpperCase:", searchCharacterClass('[A - Z]', testStr));
console.log("LowerCase:", searchCharacterClass('[a - z]', testStr));