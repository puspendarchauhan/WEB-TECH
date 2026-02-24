// var a = 10
// function show(){
// console.log(10)
// }
// show()
//var is globally accessable and we can redeclared it. 
// function varTest(){
//     if(true){
//         var a = 10
//     }
//     console.log(a)
// }
// varTest()
//var is globally scope and as well as function scope.

//let
// function varTest(){
//     if(true){
//         let a = 10
//     }
//     console.log(a)
// }
//varTest()// we can not access it 
//const
// const a = 20
// a = 20
// console.log(a)// in this  we can not modiefy the value 
 

// for taking the object
// const student={name1:"Akash"}
// console.log(student.name1)
// student.name1="vikash"
// console.log(student.name1)// refrence change nhii krr sktee  student is class and name is the property 
// const student={
//     name1:"akash",
//     greet:function(){ //greet is the behaviour of the class 
//         console.log("hello, my name is " + this.name1)
//     }
// } 
// student.greet()
// let userAge = 18

// userAge = 19
// console.log(userAge)
// userAge = 20   
// console.log(userAge)


// lexical scope --> **Lexical scope means variables are accessible based on where they are written in the code (their position in the source code).**
// Lexical scope ka matlab hota hai: agar kisi function ke paas variable nahi milta, to woh apne parent (outer) function me check karta hai
// function outer(){
//     let a=10 
//     function inner(){
//         console.log(a)
//     }
//     inner()
// }
// outer()// or jb inner ko bhrr le lenge toh nhi run hogaa kyuki function se connection cut ho jaygaa
// let a = 5;// globaaly defined
// function outer(){
//     let b =  10;// lexical se achive ho jaygaa
//     function inner(){
//         let c = 15;// or c toh defined ha hee esme 
//         console.log(a,b,c)
//      }
//     inner();
// }
// outer();

// --->> Prime number 

// let n = 7;
// let prime = true;

// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     prime = false;
//     break;
//   }
// }
// if (n > 1 && prime)
//   console.log("Prime number");
// else
//   console.log("Not a prime number");
// class Student {
//     constructor(name, marks) {
//         this.name = name;
//         this.marks = marks;
//     }
// }
// const students = [
//     new Student("Akash", 78),
//     new Student("Rohit", 65),
//     new Student("Neha", 85),
//     new Student("Aman", 72)
// ];

// students.sort((a, b) => a.marks - b.marks);

// console.log("Students in increasing order of marks:");
// students.forEach(student => {
//     console.log(`${student.name} : ${student.marks}`);
// }); 

// ----<<<< TEMPlate LITRALS ------>>>>>

// let name = "Aksh"
// // let lname = "geol"
// console.log(name + " " + lname) // these are the old wayy 
// let name = "Akash"
// let lname  = "goel";

// console.log(`hello by name is ${name} ${lname}`) // this method is the modern way and in this we avoid the concatenation.

// let msg = `hello dear students'
// welcome to the class of js
// focus on your topics` // and here we use the multi line conceptt 
// console.log(msg)

// const add = function(a,b){
//     return a + b
// }
//  console.log(add(2,3))

        // ARROW FUNCTION --->>> 
// let add = (a,b) => a + b // function key word nhi lagaga arrow function lagaga or single linee hh toh ess vajah se curly braces bhii htaa diaa ha or return bhii hta diaa haa 
// console.log(add(2,3))

// or aagr hamari dtatement ek se jyda ha toh 
    // () => {
        // write you statement
    // }
// let a  = 10
// let b = 20
// console.log(`The sum of ${a} and ${b} is ${a+b}`)// we directly print by the help of litral templete

// const obj = { 
//     name:"Akash", age: 35,
//     welcome: function(){// here we use the function for  the properties 
//         console.log(" My name is",this.name,this.age)// or this represents the current context
//         console.log(this) // if we add this the output is also gives the function refrence { name: 'Akash', age: 35, welcome: [Function: welcome] } 
//         // the output is of that typee
//     }
// }
// // obj.welcome()
// // obj.name = "vikas"// Here we change the name and then againn call the function
// // obj.welcome()
// console.log(this) // if we priint thisss the output is empyt there is no refrence so that's whyy output is empty curly braces
// function abc(){
//     let a=10
//     console.log(this.a)// hum functions me THIS keyword use nhii krtee aagr krte ha toh ERROR AATA HA UNDEFINED 
    // objects ke liaa this ataa hh
    // or aagr output print krvana ha tohh this hatadena h
// }
// abc()
// ======>>> Arrow functions===>>>

// let add=(a,b) =>( {name:"aksh"}) // object ko return krvana ke liaa braces usee krna pdtaa ha aagr nhii krte ha toh undefined aata haa
// console.log(add(2,3))
// ARROW functions ka aapna this nhii hota ha or voh aapne parent se value leta ha or uske global scope bhii bolte h

// const obj = {
//     name : "rahul",
//     showName: function(){
//         const arrowfn = () => {
//             console.log("arrow:", this.name);
//         }
//         arrowfn()
//     }
// }
// obj.showName()
// const calculator = {
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b,
//     multiply: (a, b) => a * b,
//     divide: (a, b) => {
//         if (b === 0) {
//             return "Division by zero not allowed";
//         }
//         return a / b;
//     }
// };

// let a = 50;
// let b = 70;

// console.log("Addition:", calculator.add(a, b));
// console.log("Subtraction:", calculator.subtract(a, b));
// console.log("Multiplication:", calculator.multiply(a, b));
// console.log("Division:", calculator.divide(a, b));




