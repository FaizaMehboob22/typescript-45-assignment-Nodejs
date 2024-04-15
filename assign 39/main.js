// creating a function with parameter which return in string
function city_country(city, country) {
    return ("".concat(city, " , ").concat(country));
}
// calling a function and print the returned value
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("berlin", "germany"));
