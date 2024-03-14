const student = [{
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
}];

// -----> a. Create a function displayStudentInfo that takes the student object as a parameter. Inside this function, use a 'for...in' loop to iterate over the properties of the student object and print each property and its corresponding value to the console. The output should look something like this:

function displayStudentInfo(studentObj) {
    console.log("Student Information:");
    for (let key in studentObj) {
        console.log(`${key}: ${studentObj[key]}`);
    }
}

// Example usage:
displayStudentInfo(student[0]);
