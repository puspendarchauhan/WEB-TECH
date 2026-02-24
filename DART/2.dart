// import 'dart:io';
// void main(){
//   print("Enter first number");
//   double num1 = double.parse(stdin.readLineSync()!);
//   print("Enter second number");
//   double num2 = double.parse(stdin.readLineSync()!);
//   double sum = num1 + num2;
//   print(sum);
// }

// ? -> NUll allowed  hh and ! -? Null not allowed
// ! -> NULL ASSERTION OPERATOR

// import 'dart:io';
// void main(){
//   print("Enter the age: ");
//   int age = int.parse(stdin.readLineSync()!);
//   if(age < 18){
//     print("Not eligible to vote");
//   } else{
//     print("Eligible to vote");
//   }
  
// }

void main(){
  List<String> names = ["Puspendar", "Chauhan", "parth"];
  // for(int i = 0; i < names.length; i++){
  //   print(names.length);  
  //   print(names[i]);
  // }
  for(String n in names){ // in is the membership operator
    print(n);
  }
}

