//define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));


}
// function to make magicians great through .map() it will modify array
function make_great(magician: string[]){
    return magician.map(name => `The Great ${name}`);
}

// define an array of magician names
let magicians_names = ["Atif Aslam", "Usman" ,"Haider"]

// Makin a copy of original arraythrough .Slice() function
let copy_magician_names = magicians_names.slice()

// modify the copied array to include "The Great" with their names
let copy_great_magicians =make_great(copy_magician_names);
// show both ayrrays original and copied
//original
console.log("original Array\n")
show_magicians(magicians_names);

// copied
console.log("\ncopied Array\n")
show_magicians(copy_great_magicians);