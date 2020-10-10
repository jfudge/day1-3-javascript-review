// Find Driver from the driver.js file and import it so you can use it here
import { Driver } from "./driver.interface";

class Vehicle {
  constructor(driver: Driver) {
    this.driver = driver;
  }

  // Properties
  driver: Driver;

  // Methods
  brake() {
    console.log("Stopping...");
  }
}

export { Vehicle };
