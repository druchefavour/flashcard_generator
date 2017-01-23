//===========================================================
//Create the backend for a basic flashcard application		=
//The backend will essentially constitute an API that allows users to create two types of flashcards.					=
//(1) Basic flaschcards
//(2) Cloze-Deleted flashcards
//===========================================================

// Create a 'BasicCard' constructor: that accepts `front` and `back` arguments.
function CloseCard(input, cloze, partialText) {
	//Create properties for the front and back texts:

	this.input = input;
	this.cloze = cloze;
	this.partialText = partialText;
	// Create a method to return the clozeDelete texts
	this.printInfo = function() {
		return this.cloze;
	};
	this.closeDelete();
}
var newClozeCard = new CloseCard("---", "is the first president of the United States");
var logTxt = "\nCloze: " + newClozeCard.cloze + "Text: " + newClozeCard.partialText;
fs.appendFile(log.txt, logTxt);
}
