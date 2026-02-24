abstract class animal{
  void sound();
  void sleep(){
    print("Animal is sleeping");
  }
}
class dog extends animal{
  void sound(){
    print("Dog barks");
  }
} 
void main(){
  dog d1 = dog();
  d1.sound();
  d1.sleep();
}