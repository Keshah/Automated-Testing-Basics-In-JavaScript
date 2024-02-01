// Write a function that takes two parameters - an array and a number 
// and outputs the index of an array element equal to a number

const logArrayElements = (element, index) => {
    console.log(`[${index}] = ${element}`);
  };
  
  [1,6,7,8,3,4,5,6].forEach(logArrayElements);