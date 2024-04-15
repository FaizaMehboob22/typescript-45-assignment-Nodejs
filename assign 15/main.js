var guestList = ["Mehboob", "hasan ", "waniya"];
// aray value start from 0
var dontCome = guestList[0];
console.log(dontCome, "he cannot come");
// for value add nd remove splice (replace guest)
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
