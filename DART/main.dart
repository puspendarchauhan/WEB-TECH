import 'dart:io';
class BankAccount{
  double _balance = 0; 
  set setbalance(double balance){
    if(balance < 0){
      print("Balance cannot be negative");
    } else{
      _balance = balance;
    }
  }
  get bgetbalance{
    return _balance;
  }
}
void main() {

  BankAccount account = BankAccount();

  print("Enter balance:");

  double userBalance = double.parse(stdin.readLineSync()!);

  account.setbalance = userBalance;

  print("Your balance is: ${account.bgetbalance}");

}