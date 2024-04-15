//define a function with a rest paerameter that accept items arguments representating our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoying sandwich");
}
// call the function 3 times with 3 different number of arguments
makeSandwich("chicken", "cheese", "mayo", "egg");
makeSandwich("bread", "butter");
makeSandwich("bread", "butter", "egg", "chicken", "lettuse", "cucumber");
