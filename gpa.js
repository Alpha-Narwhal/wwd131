function getGrades(inputSelector) {
    const grades = document.querySelector(inputSelector).value;
    return grades.split(",").map(grade => grade.trim().toUpperCase());
}

function lookupGrade(grade) {
    if (grade === "A") return 4;
    if (grade === "B") return 3;
    if (grade === "C") return 2;
    if (grade === "D") return 1;
    return 0;
}

function calculateGpa(grades) {
    const gradePoints = grades.map(lookupGrade);
    return (gradePoints.reduce((total, num) => total + num, 0) / gradePoints.length).toFixed(2);
}

function outputGpa(gpa, selector) {
    document.querySelector(selector).innerText = gpa;
}

function clickHandler() {
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);




