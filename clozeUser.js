"use strict"
// ----------------------------------------------------------------
var CloseFlashCard = function (cloze, partialText, cloze_delete) {
  if(!(this instanceof CloseFlashCard)) {
    return new CloseFlashCard (cloze, partialText, cloze_delete);
  }
  this.cloze = cloze;
  this.partialText = partialText;
  this.cloze_delete = cloze_delete;
  this.getPartialText = function () {
    return this.cloze + this.partialText
  }
  this.getFullText = function () {
    return this.cloze_delete + this.partialText;
  }
};
var newClozeFlashCard = new CloseFlashCard ("---", "was the first president of the United States", "George Washington");

// ----------------------------------------------------------------
var inquirer = require('inquirer');
console.log ('Hi welcome to Nide FlashCard');

var questions = [{
  type: 'input',
  name: 'C',
  message: "--- was the first president of the United States"
}];
inquirer.prompt(questions).then(function(answers) {
  console.log('\n My Answer: ');
  console.log (JSON.stringify(answers, null, ' '));
  console.log ('\n Correct Answer')
  console.log(JSON.stringify(newClozeFlashCard.getFullText(), null, ' '));
});
