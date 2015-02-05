Letter = function (char, paper) {
	this.char = char;
	this.paper = paper;
	this.elements = this.paper.set();
}

Letter.prototype.render = function (pos) {
	this.elements.push(this.paper.text(pos.x, pos.y, this.char)
		.attr({fill: 'cyan',
				'text-anchor': 'start',
				'font-size': 80})
	);
}