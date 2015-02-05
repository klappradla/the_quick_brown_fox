Game = function () {
	this.width = 800;
	this.height = 400;
	this.paper = Raphael(0, 0, this.width, this.height);
}

Game.prototype.init = function () {
	this._renderPlayground();
	var text = "quick fox";
	var placeholder = ["i", "k"];
	var word = new Word(text, placeholder, this.paper);
}

Game.prototype._renderPlayground = function () {
	var background = this.paper.rect(0, 0, this.width, this.height)
		.attr({stroke: 'none', fill: '#333'});
}