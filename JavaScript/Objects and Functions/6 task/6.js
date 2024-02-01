// -   Write a function for calculating the type of argument and type output to the console

function calculateTypeOfArg(value) {
    const typeString = Object.prototype.toString.call(value);
    return typeString.slice(8, -1).toLowerCase();
}

console.log(calculateTypeOfArg("String")); 
console.log(calculateTypeOfArg(32));      
console.log(calculateTypeOfArg(true));    
console.log(calculateTypeOfArg(null));    
console.log(calculateTypeOfArg(undefined));
console.log(calculateTypeOfArg([]));      
console.log(calculateTypeOfArg({}));      