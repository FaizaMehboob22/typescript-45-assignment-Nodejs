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
// infoam that only two guest can be invited for dnner
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two Guests to dinner with me");
//using while loop to remove guest from the array until on two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry , ".concat(removeGuest, " i cant invite you to dinner"));
}
//sending a invitation to tha last two guest on the list
console.log("invitation to the last 2 Guest");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List :", guestList);
