// A callback function is a function that is passed to another function and is called later, after some work is done.

// function greet(name){
//     console.log("hello", name)
// }
// greet("rajat") //  this is the normal way to call a function 

// function greet(name,sayBye, sayThanks){
//     console.log("hello", name)
//     callBack1()
//     callBack2()
// }
// function sayBye(){
//     console.log("bye bye")
// }
// function sayThanks(){
//     console.log("thanks")
// }
// greet("shyam", sayBye, sayThanks)

function login(callback) {
  setTimeout(() => {
    console.log(" Login successful");
    callback();
  }, 2000);
}

function checkCart(callback) {
  setTimeout(() => {
    console.log("Cart verified");
    callback();
  }, 2000);
}

function makePayment(callback) {
  setTimeout(() => {
    console.log(" Payment done");
    callback();
  }, 2000);
}

function placeOrder(callBack) {
  setTimeout(() => {
    console.log(" Order placed successfully");
    callBack();
  }, 2000);
}

console.log("Starting process...");

login(() => {
  checkCart(() => {
    makePayment(() => {
      placeOrder();
    });
  });
});
