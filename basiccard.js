// Make the application scope safe

'use strict'

// Create Basic Flashcard function accepting front and back arguments

var BasicFlashCard = function (frontText, backText) {
	//Write constructors such that users can call them with or without the new keyword
	if (!(this instanceof BasicFlashCard)) {
		return new BasicFlashCard(frontText, backText);
	}

	//Create properties to display frontext and backtext
	this.frontText = frontText;
	this.backText = backText;

	//Create method to display backText
	this.getBackText = function () {
		return this.backText;
	}
};

// Create BasicCard constructor

var newBasicFlashCard = new BasicFlashCard("Who was the first president of the United States?", "George Washington");
var anotherBasicFlashCard = BasicFlashCard("Who was the first president of the United States?", "George Washington");

console.log(newBasicFlashCard.backText);
console.log(anotherBasicFlashCard.backText);