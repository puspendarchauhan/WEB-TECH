let greatest = function(a, b, c){
    if(a >= b && a >= c){
        return a;
    }
    else if(b >= a && b >= c){
        return b;
    }
    else{
        return c;
    }
};
let result = greatest(10, 50,75)
console.log("The greatest number is: ", result)