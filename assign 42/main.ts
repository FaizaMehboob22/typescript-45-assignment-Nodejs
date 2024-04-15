
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
// call make great function to modify magicians names
let great_magicians =make_great(magicians_names);
// call show_magicians that show modified list of magicians
show_magicians(great_magicians)
