// creatin a Array
var userNames = ["Mahad", "Usman", "Zeeshan", "Admin", "haider"];
// using For Each loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", WOULD YOU LIKE TO SEE A STATUS REPORT?"));
    }
    else {
        console.log("Hello ".concat(oneUser, " , thank you for loggiong in again."));
    }
});
