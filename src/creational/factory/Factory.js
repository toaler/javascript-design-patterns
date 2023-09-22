import Car from './Car'

// FactoryExample.js
// Define a vehicle factory
class VehicleFactory {
    constructor() {
        this.vehicleClass = Car;
    }

    // Our Factory method for creating new Vehicle instances
    createVehicle(options) {
        const { vehicleType, ...rest } = options;

        switch (vehicleType) {
            case 'car':
                this.vehicleClass = Car;
                break;
            case 'truck':
                this.vehicleClass = Truck;
                break;
            // defaults to VehicleFactory.prototype.vehicleClass (Car)
        }

        return new this.vehicleClass(rest);
    }
}

export default VehicleFactory;