// creatin a Array
let userNames = ["Mahad", "Usman","Zeeshan","Admin","haider"];

// using For Each loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, WOULD YOU LIKE TO SEE A STATUS REPORT?`)
    }else {
        console.log(`Hello ${oneUser} , thank you for loggiong in again.`)
    }

})

