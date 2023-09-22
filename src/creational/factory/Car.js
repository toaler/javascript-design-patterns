// Types.js - Classes used behind the scenes
// A class for defining new cars
class Car {
    constructor({ doors = 4, state = 'brand new', color = 'silver' } = {}) {
        this.doors = doors;
        this.state = state;
        this.color = color;
    }
}

export default Car