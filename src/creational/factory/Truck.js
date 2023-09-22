// A class for defining new trucks
class Truck {
    constructor({ state = 'used', wheelSize = 'large', color = 'blue' } = {}) {
        this.state = state;
        this.wheelSize = wheelSize;
        this.color = color;
    }
}

export default Truck;