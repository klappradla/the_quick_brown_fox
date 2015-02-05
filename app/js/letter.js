Letter = function (char, paper, pos) {
	this.paper = paper;
	this.elements = this._render(char, pos);
}

Letter.prototype._render = function (char, pos) {
	return  this.paper.text(pos.x, pos.y, char)
		.attr({fill: 'cyan',
				'text-anchor': 'start',
				'font-size': 80});
}