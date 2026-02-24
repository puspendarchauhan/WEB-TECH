abstract class animal{
  void sound();
  void sleep(){
    print("Animal is sleeping"); // WE CAN'T CREATE THE OBJECT OF THE ABSTRACT CLASS BUT WE CAN CREATE THE OBJECT OF THE CHILD CLASS AND CALL THE METHOD OF THE ABSTRACT CLASS 
  }                               // AND IT DOES'T SUPPORT THE RUN TIME POLYMORPHISM
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