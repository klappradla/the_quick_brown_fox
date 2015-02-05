Game = function () {
	this.width = 800;
	this.height = 400;
	this.paper = Raphael(0, 0, this.width, this.height);
	this.elements = this.paper.set();
}

Game.prototype.init = function () {
	this._renderPlayground();
	var word = new Word("quick fox", this.paper);
}

Game.prototype._renderPlayground = function () {
	var background = this.paper.rect(0, 0, this.width, this.height)
		.attr({stroke: 'none', fill: '#333'});
	this.elements.push(background);
}