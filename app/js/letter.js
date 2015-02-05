Letter = function (char, pos, paper) {
	this.char = char;
	this.pos = {};
	this.pos.x = pos.x;
	this.pos.y = pos.y;
	this.paper = paper;
	this.elements = this._render(this.pos);
}

Letter.prototype._render = function (pos) {
	var set = this.paper.set();
	set.push(this.paper.text(pos.x, pos.y, this.char)
		.attr({fill: 'cyan',
				'text-anchor': 'start',
				'font-size': 80})
	);
	return set;
}