# Flashcard Generator App

In this project, create the backend for a basic flashcard application.

The backend will essentially constitute an API that allows users to create two types of flashcards.

* Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").

* Cloze-Deleted flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

As the application will not have a front end, the only need is to determine an efficient way to store cloze-deleted cards
The problem of displaying them is not solved at this stage.

The bulk of this project is implementing ClozeCard. 

# Procedure

* Create a new GitHub repository, named Flashcard-Generator. Clone this to your local drive.

* Create a BasicCard constructor. It should accept front and back arguments.

* Create a ClozeCard constructor. It should accept text and cloze arguments.

* ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.

* ClozeCard should have a property or method that contains or returns only the partial text.

* ClozeCard should have a property or method that contains or returns only the full text.

* ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.

* Use Prototypes to equip all ClozeCards with a method that displays the full text.

* Write the constructors such that users can call them with or without the new keyword.

* Implement scope-safe constructors.

* Create a frontend that uses the flashcard data. This front-end is a command-line prompt.

* When passed a basic flashcard, this program presents the front text; wait for user input; and then display the back text.

* When passed a cloze-deleted flashcard, this program presents the partial text; wait for user input; and then display the full text.

* Write functionality to load flashcards from a JSON file.
