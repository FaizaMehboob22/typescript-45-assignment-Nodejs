let personName : string = "Faiza Mehboob";

//in lowercase
console.log("lowercase:", personName. toLowerCase());

//in Uppercase
console .log ("uppercase:", personName. toLocaleUpperCase());

//title case
console .log ("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));