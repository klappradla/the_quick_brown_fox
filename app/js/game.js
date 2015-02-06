Game = function () {
	this.page = new Page();
	this.word;
}

Game.prototype.init = function (text, placeholder) {
	this.page.init();
	this.word = new Word(text, placeholder, this.page);
	this.word.render();
}

// Game.prototype._initConfig = function () {
// 	return {
// 		width: 800,
// 		height: 400,
// 		fontSize: 80,
// 		baseColor: "cyan"
// 	}
// }