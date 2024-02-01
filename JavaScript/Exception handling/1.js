// In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - 
// ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'
try {
    console.log(a)
} catch {
    console.log("let must be declared")
} 
let a = 3
let b = 0
let error = new Error;
 try {
  let c = a/b
  if (c == Infinity) {
    throw error 
    }
} catch(error) {
    console.log("Cannot be divided by zero")
} 




 // - 'This code will never throw an error, why?'
 // I have replaced declaration of "a", now its wrong and throwing first mistake
 // Also rewrite second case with zero, now its also throwing error, if b = 0 and result of c is infinity
