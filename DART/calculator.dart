import 'dart:io';

void main() {

  print("Enter first number:");
  double num1 = double.parse(stdin.readLineSync()!);

  print("Enter operator (+, -, *, /):");
  String op = stdin.readLineSync()!;

  print("Enter second number:");
  double num2 = double.parse(stdin.readLineSync()!);

  double result;

  switch (op) {

    case "+":
      result = num1 + num2;
      print("Result = $result");
      break;

    case "-":
      result = num1 - num2;
      print("Result = $result");
      break;

    case "*":
      result = num1 * num2;
      print("Result = $result");
      break;

    case "/":

      if (num2 == 0) {

        print("Divide by zero is not possible");

      } else {

        result = num1 / num2;
        print("Result = $result");

      }

      break;

    default:
      print("Invalid Operator");

  }

}