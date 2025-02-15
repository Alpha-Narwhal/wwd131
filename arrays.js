// Problem 1
const steps = ["first", "second", "third"];

function createListItem(step) {
    return `<li>${step}</li>`;
}

const listItems = steps.map(createListItem).join("");

document.querySelector("#listContainer").innerHTML = listItems;

// Problem 2
const letterGrades = ["A", "B", "A"];

function gradeToGpa(grade) {
    return grade === "A" ? 4 : grade === "B" ? 3 : 0;
}

const gpaValues = letterGrades.map(gradeToGpa);

// Problem 3
const gpaTotal = gpaValues.reduce((sum, value) => sum + value, 0);
const gpaAverage = (gpaTotal / gpaValues.length).toFixed(2);

// Problem 4
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortFruits = fruits.filter(fruit => fruit.length < 6);

// Problem 5
const numbers = [12, 34, 21, 54];
const luckyNum = 21;
const luckyIndex = numbers.indexOf(luckyNum);
