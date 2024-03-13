const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },

]

// --->1. a. Add a Student: Create a function to add a new student to the array.
function addStudent(id, firstName, lastName, age, grade) {
    let student = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        age: age,
        grade: grade
    }
    students.push(student);
}
//add  a new student to the list of students;
addStudent(4, "Vaibhav", "Chittora", 23, "A")
addStudent(5, "Ritesh", "Aggarwal", 25, "B")

console.log(students);


// --->Update Student Information: Create a function to update a student's information based on their id.

function updateStudent(id){
    let student = {
        id:id,
    }
    

}