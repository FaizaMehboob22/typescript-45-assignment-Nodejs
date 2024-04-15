var personName = "Faiza Mehboob";
//in lowercase
console.log("lowercase:", personName.toLowerCase());
//in Uppercase
console.log("uppercase:", personName.toLocaleUpperCase());
//title case
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
