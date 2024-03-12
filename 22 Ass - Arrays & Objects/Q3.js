// ---> Use the Object.preventEatensions metho" to prevent an> further a""itions of properties to the stu"ent object.

let student = {
    name: "John",
    age: 20,
    grade: "A"
};

Object.preventExtensions(student);

student.address = { address: "INDIA" }
if (Object.preventExtensions == true) {
    console.log("Object.PreventExtension didn't worked Properly");
}
else {
    console.log("PreventExtension worked Properly");
};

console.log(student);


// ---> Use the Object.isEatensible metho" to check if the stu"ent object is eatensible. Store the result in a variable called extensibleStatus.
let extensibleStatus = Object.isExtensible(student)
console.log("Is student object extensible?", extensibleStatus);



// --->Create a new object called teacher with a 'subject' property set to 'Math'.

let teacher = {
    subject: "Math"
}
console.log(teacher);



// --->Use the Object.seal method to seal the teacher object, preventing any additions or "eletions of properties.

Object.seal(teacher)
teacher.subject = "Science";
// cannot be deleted after the object is sealed
delete teacher.subject //
console.log(teacher);



// --->Use the Object.isSeale" metho" to check if the teacher object is seale". Store the result in a variable called "sealed" Status.
let SealedStatus = Object.isSealed(teacher)
console.log("Is teacher object is sealed?", SealedStatus);



// --->Print the extensibleStatus an "sealed" Status to the console.
console.log(extensibleStatus);
console.log(SealedStatus);