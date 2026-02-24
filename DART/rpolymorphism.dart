abstract class shape{ // RUNTIME POLYMORPHISM

  void draw();
}
class circle extends shape{
  void draw(){
    print("Drawing a circle");
  }
}
class rectangle extends shape{
  void draw(){
    print("Drawing a rectangle");
  }
}
void main(){
  shape s1 = circle();
  shape s2 = rectangle();
  s1.draw();
  s2.draw();
}