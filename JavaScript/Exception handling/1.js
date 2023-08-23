// In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - 
// ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'
let a = 3
try {
    console.log(a)
} catch {
    console.log("let must be declared")
} 


 let b = 1 / 0
 let error = new Error("Cannor be divided by zero");

 if  (b = "infinity"){
 console.log(error)}
