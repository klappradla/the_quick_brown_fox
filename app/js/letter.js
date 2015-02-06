Letter = function (char, page) {
	this.char = char;
	this.page = page;
	this.elements = this.page.paper.set();
}

Letter.prototype.render = function (pos) {
	this.elements.push(this.page.paper.text(pos.x, pos.y, this.char)
		.attr({fill: this.page.baseColor,
				'text-anchor': 'start',
				'font-size': this.page.fontSize})
	);
}