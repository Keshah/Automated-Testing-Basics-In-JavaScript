// 1. -  Create a car object, add a color property to it with the value equals 'black'
const car = {
    colour: 'black',
    engine: '100 kWt'
}

// 3. -  Add the power property to the car object, which is a function and displays the engine power to the console
car.power = function() {
    console.log("Engine power is", this.engine);
};


// 2. -  Change the color property of the car object to 'green'
car.colour = "green";

car.power();
console.log(car);


