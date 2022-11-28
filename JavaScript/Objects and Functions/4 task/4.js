// 4. -   Pears and apples are accepted to the warehouse, write a function that returns the result of
//        adding the number of accepted pears and apples

const warehouse = {
    user:{
        pears: 5,
        apples: 5
    },
    addFruits() {
        let addPears = prompt('How much pears you want to add?', );
        let addApples = prompt('How much apples you want to add?', );
        warehouse.user.pears = warehouse.user.pears + +addPears;
        warehouse.user.apples = warehouse.user.apples + +addApples;
      }
}

  
    warehouse.addFruits()
    alert("Now number of pears is " + warehouse.user.pears)
    alert("Now number of apples is " + warehouse.user.apples)
