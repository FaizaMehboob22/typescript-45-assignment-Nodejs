// step 1
// let userNames = ["Mahad","Ali ", "zeeshan","Admin","usman"]

// if (userNames.length === 0){
//     console.log("your Array in Empty we need to find some users!")
// }
// else{
//     //using for each loop on Array
//     userNames.forEach(oneUser =>{
//         if(oneUser === "Admin"){
//             console.log(`Hello ${oneUser}, WOULD YOU LIKE TO SEE A STATUS REPORT?`)
//         }else {
//             console.log(`Hello ${oneUser} , thank you for loggiong in again.`)
//         }
    
//     })
    
// }
// step 2
let userNames = []

if (userNames.length === 0){
    console.log("your Array in Empty we need to find some users!")
}
else{
    //using for each loop on Array
    userNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, WOULD YOU LIKE TO SEE A STATUS REPORT?`)
        }else {
            console.log(`Hello ${oneUser} , thank you for loggiong in again.`)
        }
    
    })
    
}