// Array of Current user
var current_users = ["Usman", "Haider", "Izhaan", "Zain", "Osama"];
//Array of New Users
var new_users = ["Humza", "Ayesha", "Haider", "Usman", "Waniya"];
//loop throught new_users to check for usernames avability
new_users.forEach(function (new_one_user) {
    // making a condition for userame already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print Different messages using if-else statement
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, "is available"));
    }
});
