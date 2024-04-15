
// Array of Current user
let current_users = ["Usman","Haider","Izhaan","Zain","Osama"]
//Array of New Users
let new_users = ["Humza","Ayesha","Haider","Usman","Waniya"]
//loop throught new_users to check for usernames avability
new_users.forEach(new_one_user => {
    // making a condition for userame already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
// print Different messages using if-else statement
if(our_condition){
        console.log(`sorry ${new_one_user} is already taken`)

    }else{
        console.log(`This username ${new_one_user}is available`)
    }
})
