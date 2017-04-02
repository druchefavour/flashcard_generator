// Using the require keyword lets us access all of exports in the basiccard.js file

var BasicCard = require("./basiccard.js");
var ClozeCard = require("./clozecard.js");

// Using inquirer keyword to pass Flashcards
var inquirer = require('inquirer');
console.log ('Hi Welcome to Node FlashCard');

// Create Basic Flashcard constructor
var newBasicCard = new BasicCard("Who was the first President of the United States", "George Washington")
var newClozeCard = new ClozeCard ("---", "was the first president of the United States", "George Washington");

// Create script to pass flashcards
var passFlashCard = function () {
	inquirer.prompt({
		name: "action",
		type: "list",
		message: "What would you do?",
		choices: ["Pass a Basic flash Card", "Pass a Cloze flash Card"]
	}).then(function(answer){
		switch (answer.action) {
			case "Pass a Cloze flash Card":
			passClozeCard();
			break;
			case "Pass a Basic flash Card":
			passBasicCard ();
			break;
		}
	});
};

var passBasicCard = function () {
	inquirer.prompt({
		type: "input",
		name: "name",
		message: "Who was the first president of the United States?"
	}).then(function(answer){
		passFlashCard();
		console.log('\n Correct Answer: ');
		console.log(JSON.stringify(newBasicCard.getBackText(), null, ' '));
	});
};

var passClozeCard = function (questions) {
	inquirer.prompt({
		type: "input",
		name: "name",
		message: "--- was the first president of the United States"
	}).then(function(answers, error) {
		var x = answers.name;
		// console.log(x);
		var y = newClozeCard.getClozeDelete();
		// console.log(y);

		if (x === y) {
			console.log ('\n Correct Answer: ');
			console.log(JSON.stringify(newClozeCard.displayFullText(), null, ' '));
		} else {
			throw error;
			console.log(err);
		}
	});
};

passFlashCard();