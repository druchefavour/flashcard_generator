// 1.Create a BasicCard constructor. It accepts front and back arguments.
function BasicCard (front, back) {
	this.front = front;
	this.back = back;

	// method to display the full text
	this.printFullText = function () {
		console.log("Full Text: " + this.front + " " + this.back );
		}
		this.printFullText();
	}

// Create a new BasicCard Player

var newBasicCardPlayer = new BasicCard ("Who was the first president of the United States?", "George Washington");
