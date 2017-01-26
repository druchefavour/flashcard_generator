// Create Basic Flascard function accepting front and back arguments

var BasicFlashCard = function (frontText, backText) {

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