// Make application scope safe

'use strict'
// Create Cloze Flashcard function accepting cloze, partial text and cloze delete (answer)

var ClozeFlashCard = function (cloze, partialText, cloze_delete) {

	//Enable the constructor to work whether 'new' is used or not
	if(!(this instanceof ClozeFlashCard)) {
		return new ClozeFlashCard (cloze, partialText, cloze_delete);
	}  

	// Create properties to return the cloze part of the text, the partial text and the cloze_delete part of the card
	this.cloze = cloze;
	this.partialText = partialText;
	this.cloze_delete = cloze_delete;
	
	// Create methods to return partial text with the cloze part, the cloze delete part of th card and the full text
	this.getClozeDelete = function () {
		return this.cloze_delete
	}
	this.getDisplayText = function () {
		return this.partialText;
	}
	
	this.displayFullText = function () {
		return this.cloze_delete + ' ' + this.partialText;
	}
};

// ===================================================================================
//var newClozeFlashCard = new ClozeFlashCard ("---", "was the first president of the United States", "George Washington");
//var anotherClozeFlashCard = ClozeFlashCard ("---", "was the first president of the United States", "George Washington");

// -----------------------------------------------------------------------------------
// Display to show that instanceof works
//console.log(newClozeFlashCard.displayFullText());
//console.log(anotherClozeFlashCard.displayFullText());
//====================================================================================

module.exports = ClozeFlashCard;