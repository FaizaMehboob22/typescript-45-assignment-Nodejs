var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries and print its original order
var countriesToVisit = ["China", "Denmark", "Argentina"];
console.log("Original Order:", countriesToVisit);
//print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// show that the array is still in its original order
console.log("Still in Order:", countriesToVisit);
//print a array in reverse order without modifying the actual array list
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// show that the array is still in its original order
console.log("Still in Order:", countriesToVisit);
// we have changed the original array order now
console.log("Original Aray Reversed:", countriesToVisit.reverse());
//print the array to show that its back to orginal order
console.log("Back TO Original Order:", countriesToVisit.reverse());
//print the array to show that its order has been changed in Alphabetical now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// we have changed the original array order now in reverse order again
console.log("Original Aray Reversed again:", countriesToVisit.reverse());
