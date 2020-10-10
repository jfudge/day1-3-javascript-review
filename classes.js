// Class Object
// When you create a class, you create an "Object"
// that can be used in an object-oriented programming (OOP) way.
// Classes are like blue prints
var Car = /** @class */ (function () {
    // Objects in Javascript can take parameters through the constructor method
    // The constructor method will run whenever an object is "instantiated"
    function Car(owner, color) {
        if (color === void 0) { color = "grey"; }
        // You can have properties
        this.numberOfWheels = 4;
        console.log("constructor runs...");
        // Run code that you need to "construct the instance"
        // You can pass parameters from a class instantiation into the properties of the class
        // Use the keyword this. "this" is a self-reference to the object
        // console.log(this);
        this.owner = owner;
        this.color = color;
    }
    // You can have methods - declarative functions
    Car.prototype.accelerate = function () {
        console.log(this.owner + "'s car is accelerating");
    };
    Car.prototype.brake = function () {
        console.log(this.owner + "'s car is stopping");
    };
    return Car;
}());
// How do you use a class?
// In order to use a class object, you have to instantiate it (create an instance of the class)
var myCarInstance = new Car("Eric");
var blackCarInstance = new Car("Jeff", "black");
var redCarInstance = new Car("Emily", "red");
console.log(myCarInstance);
console.log(blackCarInstance);
console.log(redCarInstance);
myCarInstance.accelerate();
blackCarInstance.brake();
redCarInstance.accelerate();
