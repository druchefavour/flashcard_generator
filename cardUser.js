"use strict"
// 1.Create a BasicCard constructor. It accepts front and back arguments.
function BasicCard (front, back) {

	//Ensure players get the result of new call, even if they forget
	if (!(this instanceof BasicCard)) {
		return new BasicCard(front, back);
	}

	// otherwise, proceed as usual
	this.front = front;
	this.back = back;

	// method to display the full text
	this.printFullText = function () {
		return this.front + " " + this.back;
		};
	}
// Create a new BasicCard Player
console.log(new BasicCard("Who was the first president of the United States?", "George Washington") instanceof BasicCard);
console.log(new BasicCard("Who was the first president of the United States?", "George Washington"));
console.log(new BasicCard("Who was the first president of the United States?", "George Washington").printFullText());

//==============================================================

// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create CloseCard objects

function ClozeCard (cloze_delete, cloze, partialText) {
	this.cloze_delete = cloze_delete;
	this.cloze = cloze;
	this.partialText = partialText;

	//method that contains or returns only the cloze-deleted portion of the text.
	this.printClozeDeleted = function () {
		console.log(this.cloze_delete);
		return this.cloze_delete;
	};

	// create method that contains or returns only the partial text
	this.printPartialText = function () {
		console.log(this.cloze + " " + this.partialText);
		return this.cloze + " " + this.partialText;
	};

	// create a method that contains or returns the full text
	ClozeCard.prototype.printFullText = function () {
		console.log(this.cloze_delete + " " + this.partialText);
		return this.cloze_delete + " " + this.partialText
	};

}

// creates a ClozeCard using the "Clozecard" constructor
var newClozeCard = new ClozeCard("George Washington", "---", "was the first president of the United States.");

newClozeCard.printClozeDeleted();
newClozeCard.printPartialText();
newClozeCard.printFullText();