
// LAB1 3RD Questiion
let student = {
    name: "Rahul",
    age: 20,
    course: "B.Tech"
};

let updatedStudent = {
    ...student,
    age: 21,
    city: "Ghaziabad"
};

console.log("Original Object:", student);
console.log("Updated Object:", updatedStudent);

// LAB1 4th question 
function multiply(a,b,c){
    return a * b * c
}
let  numbers = [2,3,4]
console.log("Multiply: "),   console.log( multiply(...numbers))

// LAB1 1st Question
function sumNumbers(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log("Sum =", sumNumbers(10, 20, 30, 40));

// LAB 1 Question 2
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = [...array1, ...array2];

console.log("Merged Array:", mergedArray);