
var Letter = function(letter){
	this.string = letter;
	this.bool = false;
}

Letter.prototype.displayChar = function() {
	if(this.bool){
		return this.string;
	}
	else{
		return "_";
	}
};

Letter.prototype.checkGuess = function(guess){
	if(guess === this.string){
		this.bool = true;
		return true;
	}
};

module.exports = Letter;

