import 'dart:io';

void main() {
   double bill = 0;
  print("Enter electricity units:");
  double unit = double.parse(stdin.readLineSync()!);

 if(unit >= 0 && unit <= 100){
    bill = unit * 1.5;
  }
   else if(unit > 101 && unit <= 200){
    bill = unit * 2.5;
  }
  else if(unit > 201 && unit <= 300){
    bill = unit * 4.0;
  }
  else if(unit > 300){
    bill = unit * 5.0;
  }
  print("Electricity bill : $bill");
}