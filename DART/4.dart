class student{
  String?  name;
  int?  age;
  int? marks;
  String? city;
  student(this.name, this.age, this.marks, this.city); // this is the constructor of the class student 
      display(){
    print("$name, $age, $marks, $city");  
  }
}

void main(){
  student s1 =  student("Ramesh", 20, 85, "Delhi"); // in dart we dont use new keyword to create a object for the class
  
  student s2 =  student("Suresh", 22, 90, "Mumbai");
  
  student s3 =  student("Rajesh", 19, 75, "Chennai");
  List<student> students = [s1, s2, s3];
  for(var p in  students){
    p.display();
  }
}