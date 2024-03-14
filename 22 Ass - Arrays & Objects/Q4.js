const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
]

// ---> a. Add a Student: Create a function to add a new student to the array.
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



// --->b. Update Student Information: Create a function to update a student's information based on their id.
function updateStudent(id, updatedName, updatedAge, updatedGrade) {
    // Find the student with the given id
    let studentToUpdate = students.find(student => student.id === id);

    // If the student is found, update their information
    if (studentToUpdate) {
        studentToUpdate.firstName = updatedName;
        studentToUpdate.age = updatedAge;
        studentToUpdate.grade = updatedGrade;
        console.log(`Student with ID ${id} has been updated successfully.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}
updateStudent(1, "Rahul", 18, 'C')
console.log(students); //Student with id:1 has been updated.




// c. Delete a Student: Create a function to delete a student based on their id.
function deleteStudent(id) {
    // Find the index of the student with the given id
    let index = students.findIndex(student => student.id === id);

    // If the student is found, remove them from the array
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Student with ID ${id} has been deleted successfully.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}
deleteStudent(3)
console.log(students); // student with id:3 has been deleted.




//---> d. List All Students: Create a function to display a list of all students.

function listAllStudents() {
    // Check if there are any students in the array
    if (students.length === 0) {
        console.log("No students found.");
    }
    else {
        // Loop through each student in the array and display their information
        console.log("List of all students:");
        students.forEach(student => {
            console.log(`ID: ${student.id}, Name: ${student.firstName}, Age: ${student.age}, Grade: ${student.grade}`);
        });
    }
}
listAllStudents(); //prints all the students present in the array




//---> e. Find Students by Grade: Create a function to find all students who have a specific grade.
function findStudent(grade) {
    //find the student with particular grade;
    grade = students.findIndex(student => students.grade === grade)
    if (grade) {
        console.log("this is the student of ", grade, "Grade.");
    }
    else {
        console.log("Student with particular grade is not found.");
    }
}
console.log("Lets find student with their grade - ");
findStudent("A")
findStudent("C")




//---> f. Calculate Average Age: Create a function to calculate the average age of all students using array method.
function calculateAverageAge() {
    // Check if there are any students in the array
    if (students.length === 0) {
        console.log("No students found.");
        return; // Exit the function if there are no students
    }

    // Calculate the total age of all students
    let totalAge = students.reduce((sum, student) => sum + student.age, 0);

    // Calculate the average age
    let averageAge = totalAge / students.length;

    console.log(`Average age of all students: ${averageAge}`);
}

// Example usage:
calculateAverageAge();

