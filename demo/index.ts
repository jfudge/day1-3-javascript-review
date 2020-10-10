import { Vehicle } from "./vehicle.class";
import { Driver } from "./driver.interface";
// This is the entry point into my demo application
// Running node index.js, to get the demo to run
// If you're going to create global variables, do them here

const main = () => {
  const me: Driver = {
    name: "Eric",
    age: 32,
  };
  // instantiate a vehicle
  const myVehicleInstance = new Vehicle(me);

  // Do something with the Vehicle
  myVehicleInstance.brake();
};

main();
