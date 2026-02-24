class person{
  String?  name;
  int? age;
  String? _city;
  person(this.name, this.age);
  set setcity(String city){
    _city = city;
  }
  get getcity{
    return _city;
  }
  display(){
    print("$name, $age");
  }
}
 void main(){
  person p1 = person("Ramesh", 20);
  p1.setcity = "Delhi";
  print(p1.getcity);
 }