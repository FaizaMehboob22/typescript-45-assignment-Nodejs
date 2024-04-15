//define a function with a rest paerameter that accept items arguments representating our sandwich

function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items:\n");

    items.forEach(singleItem => console.log(singleItem));
    console.log ("\nNow enjoying sandwich");
}

    // call the function 3 times with 3 different number of arguments
    makeSandwich("chicken","cheese","mayo","egg");

    makeSandwich("bread","butter");

    makeSandwich("bread","butter","egg","chicken","lettuse","cucumber")


