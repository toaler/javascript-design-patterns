import expect from "expect";

import VehicleFactory from "../../../../src/creational/factory/Factory";
import Car from "../../../../src/creational/factory/Car";


test('Module Test', () => {
// Create an instance of our factory that makes cars
    const carFactory = new VehicleFactory();
    const car = carFactory.createVehicle({
        vehicleType: 'car',
        color: 'yellow',
        doors: 6,
    });

// Test to confirm our car was created using the vehicleClass/prototype Car
// Outputs: true

    expect(car).toBeInstanceOf(Car);

// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
    expect(car.doors).toBe(6);
    expect(car.state).toBe('brand new');
    expect(car.color).toBe('yellow');
});






