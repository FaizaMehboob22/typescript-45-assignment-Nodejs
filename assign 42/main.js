//define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magician names
var magicians_names = ["Atif Aslam", "Usman", "Haider"];
var great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
