// --> Program that grades students based on their marks 

function StudentGrades(marks) {
    if (marks > 90) {
        console.log("A Grade");
    }
    else if (marks >= 70 && marks < 90) {
        console.log("B Grade");
    }
    else if (marks >= 50 && marks < 70) {
        console.log("C Grade");
    }
    else {
        console.log("F Grade");
    }
}

// Test the function

StudentGrades(25) // F Grade
StudentGrades(65) // C Grade
StudentGrades(100) // A Grade
StudentGrades(85) // B Grade
