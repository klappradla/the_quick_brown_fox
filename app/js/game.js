Game = function () {
	this.page = new Page();
	this.word;
}

Game.prototype.init = function (text, gap) {
	this.page.init();
	this.word = new Word(text, gap, this.page);
	this.word.render();
	// todo: add game loop with end
}

// Game.prototype._initConfig = function () {
// 	return {
// 		width: 800,
// 		height: 400,
// 		fontSize: 80,
// 		baseColor: "cyan"
// 	}
// }