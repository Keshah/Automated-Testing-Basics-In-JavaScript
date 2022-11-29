//Create 2 objects: animal and cat, add move property to animal object,
//cat object must inherit move property from object animal

let animal = {
move: true
};

let cat = {

};

cat.__proto__ = animal;

alert(cat.move)