// define variable
var alienColor = "green";
// using if and Else -if Statement
if (alienColor === "green") {
    console.log("(version 1) you shot down green alien you have earned 5 points");
}
else if (alienColor === "yellow") {
    console.log("you shot down yellow alien you have earned 10 points");
}
else if (alienColor === "red") {
    console.log("you shot down red alien you have earned 15 point");
}
// verison 2
var alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("you shot down red alien you have earned 5 point");
}
else if (alienColor2 === "yellow") {
    console.log("(version 2)you shot down red alien you have earned 10 point");
}
else if (alienColor2 === "red") {
    console.log("you shot down red alien you have earned 15 point");
}
//version 3
var alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("you shot down red alien you have earned 5 point");
}
else if (alienColor3 === "yellow") {
    console.log("you shot down red alien you have earned 10 point");
}
else if (alienColor3 === "red") {
    console.log("(version 3) you shot down red alien you have earned 15 point");
}