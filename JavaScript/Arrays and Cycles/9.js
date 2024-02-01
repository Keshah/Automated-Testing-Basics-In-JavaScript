// Implement a loop that prints prime numbers to the console

for(let i = 1; i <= 10; i++) {
    if(i == 1) {
        
    }else if(i == 2) {
        console.log(`${i}`);
    }else if(i >= 3){
        x = i / 2;
        y = Number.isInteger(x);
        if(y == false && i >= 3) {
            console.log(`${i}`);
        }
    }
    }