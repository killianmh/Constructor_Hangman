# Constructor_Hangman
This is a node application that plays a hangman game

Open up node and run "node index.js" to start!

I use two constructor functions: one called Letter and one called Word;
1. Letter constructor function creates an object for each letter in the word
2. Word constructor function creates an object made up of the Letter objects and other items

The index.js file contains the logic to:
1. pick a random word from a list (making sure it isn't the same as the word from last round)
2. prompt the user using inquirer module to guess a letter
  2a.check if the user already guessed that character; if they did, warn the user and ask them to guess again
3. check if the letter is correct; if it is, update the display using a method in the Word constructor
4. check if the letter is incorrect; if it is wrong, tell the user and ask them to guess again
5. if the user runs out of the guesses, the program indicates that and generates a new word to play again
6. if the user guesses the word right, the program congratulates them and generates a new word to play again

