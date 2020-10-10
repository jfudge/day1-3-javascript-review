"use strict";
exports.__esModule = true;
var vehicle_class_js_1 = require("./vehicle.class.js");
// This is the entry point into my demo application
// Running node index.js, to get the demo to run
// If you're going to create global variables, do them here
var main = function () {
    var me = {
        name: "Eric",
        age: 32
    };
    // instantiate a vehicle
    var myVehicleInstance = new vehicle_class_js_1.Vehicle(me);
    // Do something with the Vehicle
    myVehicleInstance.brake();
};
main();
