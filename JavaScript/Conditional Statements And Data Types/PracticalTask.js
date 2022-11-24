// 1 task
// Addition
let num = 5;
let str = '1';


let addFirst = str +  true;
let addSecond = str +  num;
let addThird = num +  true;

console.log('string + boolean=', addFirst)
console.log('string + number=', addSecond)
console.log('number + boolean=', addThird)

// 2 task
// Multiplication
let multFirst = str * true;
let multSecond = str *  num;
let multThird = num * true;

console.log('string * boolean=', multFirst)
console.log('string * number=', multSecond)
console.log('number * boolean=', multThird)

// 3 task
// Division
let divFirst = str / true;
let divSecond = str /  num;
let divThird = num / true;

console.log('string / boolean=', divFirst)
console.log('string / number=', divSecond)
console.log('number / boolean=', divThird)

// 4 task
// explicit conversion
let strValue = true;
strValue = String(strValue); 
console.log(typeof strValue);

let strNum = "123";
let numValue = Number(strNum); 
console.log(typeof numValue);

let NaN_age = Number("Ten");
console.log(NaN_age); 
let age = Number("10");
console.log(age); 