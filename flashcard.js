// Using the require keyword lets us access all of exports in the basiccard.js file

var BasicCard = require("./basiccard.js");
var ClozeCard = require("./clozecard.js");

// Create Basic Flashcard constructor
var newBasicCard = new BasicCard("Who was the first President of the United States", "George Washington")
var newClozeCard = new ClozeCard ("---", "was the first president of the United States", "George Washington");

// Create script to pass flashcards
var passFlashCard = function () {
	inquirer.prompt({
		name: "action",
		type: "display",
		message: "What would you do?",
		choices: ["Pass a Basic flash Card", "Pass a Cloze flash Card"]
	}).then(function(answer){
		switch (answer.action) {
			case "Pass a Basic flash Card":
			passBasicCard();
			break; 

			case "Pass a Cloze flash card":
			passClozeCard();
			break;
		}
	});
};

//This will print everything in exports
console.log("--------------------------");
console.log("THE FLASH CARDS");
console.log(newBasicCard.getBackText());
console.log(newClozeCard.displayFullText());
console.log("--------------------------");
