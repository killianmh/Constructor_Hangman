var Word = require("./Word");

var inquirer = require("inquirer");

var words = ["dinosaur","bones","trowel","dirt","triceratops","velociraptor","jurassic","paleontologist","museum","fossil",];

var guessedLetters = [];

function pickWord(oldWord){
	var guessesRemain = 15;
	var wordCount = words.length;
	var chosenWord = words[getRandomNum(wordCount)];

	while(chosenWord === oldWord){
		chosenWord = words[getRandomNum(wordCount)];
	}
	var newWord = new Word (chosenWord);

	hangman(newWord, guessesRemain, chosenWord);
}

function getRandomNum(wordCount){
	var rando = Math.floor(Math.random()*(wordCount));
	return rando;
}

function hangman(newWord, guessesRemain, chosenWord){

	if(guessesRemain != 0 && unGuessedLetters(newWord)){
		console.log("");
		newWord.displayWord();

		inquirer.prompt([
			{
				type: "input",
				name: "guess",
				message: "Guess a letter!"
			},
		]).then(function(answers){
			if(guessedLetters.indexOf(answers.guess) > -1){
				console.log("You already guessed that")
				hangman(newWord, guessesRemain, chosenWord);
				return;
			}
			guessedLetters.push(answers.guess);
			guessesRemain --;
			if(newWord.checkForLetter(answers.guess)){
				console.log("Correct!");
				console.log("Remaining guesses: " + guessesRemain);
			}
			else{
				console.log("Incorrect!");
				console.log("Remaining guesses: " + guessesRemain);
			}

			hangman(newWord, guessesRemain, chosenWord);
		})

	}

	else if (guessesRemain != -1 && !unGuessedLetters(newWord)){
		console.log("Congrats you guessed the word: " + chosenWord);
		console.log("\nHere's your next word: ");
		guessedLetters.length = 0;
		pickWord(chosenWord);

	}

	else{
		console.log("Sorry, no more guesses left; the word was " + chosenWord);
		console.log("\nHere's your next word: ");
		guessedLetters.length = 0;
		pickWord(chosenWord);
	}
}

function unGuessedLetters (word){
	for(i = 0; i < word.wordArray.length; i ++){
		if(word.wordArray[i].bool === false){
			return true;
		}
	}
	return false;
}

pickWord();