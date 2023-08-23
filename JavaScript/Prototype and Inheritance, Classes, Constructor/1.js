//Create 2 objects: animal and cat, add move property to animal object,
//cat object must inherit move property from object animal

let animal = {
  name: "Animal",
  move() {
    console.log(`${this.name} moves.`);
  }
};

let cat = {
  __proto__: animal,
  name: "Cat",
  move() {
    super.move();
  }
};

cat.move();
