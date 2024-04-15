let guestList = ["Mehboob" , "hasan ", "waniya" ];
// aray value start from 0
let dontCome = guestList[0];
console.log(dontCome,"he cannot come");
// for value add nd remove splice (replace guest)
guestList.splice(0, 1, "Amir");
guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));