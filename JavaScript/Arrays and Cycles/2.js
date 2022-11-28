// Given an array of car manufacturers, convert the array to a string and back to an array
const manufacturers = ["BMW", "Mercedes", "Audi"]
let str = " "

for (let el of manufacturers) {
    str+= el + " "
}

console.log(str)


// tried the way below, described in the video, but it doesnt work

//const manufacturers = ["BMW", "Mercedes", "Audi"]
//
//manufacturers.forEach((arr) => {
//    return console.log(`Array: ${arr}`)
//});


