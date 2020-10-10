// Class Object
// When you create a class, you create an "Object"
// that can be used in an object-oriented programming (OOP) way.

// Classes are like blue prints
class Car {
  // Objects in Javascript can take parameters through the constructor method
  // The constructor method will run whenever an object is "instantiated"
  constructor(owner: string, color: string = "grey") {
    console.log("constructor runs...");
    // Run code that you need to "construct the instance"
    // You can pass parameters from a class instantiation into the properties of the class
    // Use the keyword this. "this" is a self-reference to the object
    // console.log(this);
    this.owner = owner;
    this.color = color;
  }

  // You can have properties
  numberOfWheels: number = 4;
  owner: string; // These properties are unassigned, typecasting helps with reading the code
  color: string;

  // You can have methods - declarative functions
  accelerate() {
    console.log(this.owner + "'s car is accelerating");
  }

  brake() {
    console.log(this.owner + "'s car is stopping");
  }
}

// How do you use a class?
// In order to use a class object, you have to instantiate it (create an instance of the class)
const myCarInstance = new Car("Eric");
const blackCarInstance = new Car("Jeff", "black");
const redCarInstance = new Car("Emily", "red");

console.log(myCarInstance);
console.log(blackCarInstance);
console.log(redCarInstance);

myCarInstance.accelerate();
blackCarInstance.brake();
redCarInstance.accelerate();
