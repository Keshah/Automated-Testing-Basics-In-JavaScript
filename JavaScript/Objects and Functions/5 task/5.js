// 5. -   Your name is saved in the payment terminal, write a function to define the name in the terminal 
//        (if you entered your name, then hello + name, if not, then there is no such name)
const terminal = {
    user:{
        name: "Vasya"
    },
    checkName() {
        const q = prompt('Whats your name?', "Vasya");

        if (q === terminal.user.name) {
          alert("Hello, " + q);
        } else {
          alert('there is no such name');
        }
      }
}

  
  terminal.checkName();
  



