var Letter = require("./Letter");

var Word = function(word){
	this.wordArray = [];
	for(i = 0; i < word.length; i ++){
		this.wordArray[i] = new Letter(word[i]);
	}
};

Word.prototype.displayWord = function(){
	this.word = "";
	for(i = 0; i < this.wordArray.length; i++){
		this.word = this.word + " " + this.wordArray[i].displayChar();
	}
	console.log(this.word);
};

Word.prototype.checkForLetter = function(char){
	var rightGuess = false;
	for(i = 0; i < this.wordArray.length; i ++){
		this.wordArray[i].checkGuess(char);
		if(this.wordArray[i].checkGuess(char)){
			rightGuess = true;
		}
	}

	if(rightGuess){
		return true;
	}
}

module.exports = Word;

