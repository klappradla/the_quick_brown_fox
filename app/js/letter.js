Letter = function (char, paper, pos) {
	this.char = char;
	this.pos = {};
	this.pos.x = pos.x;
	this.pos.y = pos.y;
	this.paper = paper;
	this.elements = this._render();
}

Letter.prototype._render = function () {
	return  this.paper.text(this.pos.x, this.pos.y, this.char)
		.attr({fill: 'cyan',
				'text-anchor': 'start',
				'font-size': 80});
}