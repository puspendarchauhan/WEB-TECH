import 'Personn.dart';

class Student extends Personn {
  String? marks;
  String? city;
  Student(String name, int age, String marks, String city) : super(name, age) {
    this.marks = marks;
    this.city = city;
  }
}
