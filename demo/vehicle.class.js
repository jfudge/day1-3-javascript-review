"use strict";
exports.__esModule = true;
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(driver) {
        this.driver = driver;
    }
    // Methods
    Vehicle.prototype.brake = function () {
        console.log("Stopping...");
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
