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