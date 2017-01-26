// Using the require keyword lets us access all of exports in the basiccard.js file

var ClozeCard = require("./clozecard.js");

var oneClozeFlashCard = new ClozeCard ("---", "was the first president of the United States", "George Washington");

//This will print everything in exports
console.log("--------------------------");
console.log("ALL THE STUFF I NEED");
console.log(oneClozeFlashCard.displayFullText());
console.log("--------------------------");
