//DEFINE VARIABLES
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// Tests for equality and inequality with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");
console.log("is apple is not equal to apple?");
console.log(apple != "apple");
// Tests using the lower case function
console.log("is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");
console.log("is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");
// Numerical tests 
//equal to
console.log("\nIs ten is equal to  twenty?");
console.log(ten == twenty);
// not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
// greater then
console.log("\nIs ten is greater then zero?");
console.log(ten > 0);
//less then
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);
// greater then 0r equal to
console.log("\nIs ten is greater than or equal to 5 ?");
console.log(ten >= 5);
//less then is equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);
// test using "and" & "or" operaters
//using &&
console.log("\n twenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// using (or)
console.log("\n 20 is greater than 50 Or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 Or 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
// test wheather an item is include in array
console.log(" is orange  include in fruits array");
console.log(fruits.includes("orange"));
// not include
console.log("\nIs orange not include in fruits array");
console.log(!fruits.includes("orange"));
