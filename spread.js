oldarray = [ 1,2,3,4,5]
newarray = [...oldarray,6,7,8,9]
console.log(newarray)// The spread operator (...) spreads (expands) the elements of an array into individual values.

function add(a,b,c){
    return a + b + c
}
numbers = [1,2,3]
console.log(add(...numbers))


const csStudents = ["aksh", "ashish", "rajat"]
const itStudents = ["ankit", "anurag", "rohit"]
const allStudents = [...csStudents, ...itStudents]
console.log(allStudents)
console.log("\n")

// LAB1 3RD 
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

console.log("\n")

console.log("Updated Object:", updatedStudent);

console.log("\n")
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = [...array1, ...array2];

console.log("Merged Array:", mergedArray);