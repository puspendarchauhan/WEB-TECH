// The rest operator (...) allows a function to accept any number of arguments and stores them as an array.

const sumAll = function(...numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum
}
console.log(sumAll(1,2,3,4,5,6,7,8,9,10))

function showNumbers(...nums) {
    console.log(nums);
}

showNumbers(1, 2, 3, 4);

function showDetails(name, ...skills){
    console.log("Name:", name)
    console.log("Skills:", skills)
}
showDetails("akashat", "javascript", "pyhton", "java")


function sumNumbers(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log("Sum =", sumNumbers(10, 20, 30, 40));






