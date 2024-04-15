// creating a guest list array
var guestList = ["Mehboob", "Rayan", "Hasan", " Waniya"];
//making variable for those guest who cant come
var dontCome = guestList[0];
//print the name of guest who cant come
console.log(dontCome, "he cannot come");
// modefinind array add and remove guest list array
guestList.splice(0, 1, "Amir");
// messahe print for bigger table
console.log("Good News ! We have found bigger table for dinner");
//unshift adding a  value at starting index of array
guestList.unshift("Ali");
// adding a new value at ending index of array
guestList.push("Zain");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Usama");
//print message of uodated list
console.log("Update List of Our Guest");
//sending a invitation message to our guests one by one with their name
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
