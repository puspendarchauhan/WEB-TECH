
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let sumOfSquaresOfEven = function (array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {      
            sum += array[i] * array[i]; 
        }
    }
    return sum;
};

let result = sumOfSquaresOfEven(arr);
console.log("Sum of squares of even numbers:", result);