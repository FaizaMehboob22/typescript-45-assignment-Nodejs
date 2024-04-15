// Making a array of countries and print its original order
let countriesToVisit: string[] =["China", "Denmark", "Argentina" ];
console.log("Original Order:" ,countriesToVisit);
//print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());
// show that the array is still in its original order
console.log("Still in Order:", countriesToVisit);
//print a array in reverse order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());
// show that the array is still in its original order
console.log("Still in Order:", countriesToVisit);
// we have changed the original array order now
console.log("Original Aray Reversed:",countriesToVisit.reverse());
//print the array to show that its back to orginal order
console.log("Back TO Original Order:",countriesToVisit.reverse());

//print the array to show that its order has been changed in Alphabetical now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// we have changed the original array order now in reverse order again
console.log("Original Aray Reversed again:",countriesToVisit.reverse());

 