// Create Cloze Flashcard function accepting cloze, partial text and cloze delete (answer)

var ClozeFlashCard = function (cloze, partialText, cloze_delete) {

	// Create properties to return the cloze part of the text, the partial text and the cloze_delete part of the card

	this.cloze = cloze;
	this.partialText = partialText;
	this.cloze_delete = cloze_delete;
	
	// Create methods to return partial text with the cloze part, the cloze delete part of th card and the full text
	this.getDisplayText = function () {
		return this.cloze + ' ' + this.partialText;
	}
	this.getClozeDelete = function () {
		return this.cloze_delete;
	}
	this.displayFullText = function () {
		return this.cloze_delete + ' ' + this.partialText;
	}
};