Placeholder = function (char, paper, pos) {
	this.paper = paper;
	this.char = char;

	return this._render(pos);
}

Placeholder.prototype._render = function (pos) {
	var elements = this.paper.set();
	elements.push(this.paper.circle(pos.x + 30, pos.y, 30)
		.attr({fill: 'none', stroke: 'cyan'}));
	elements.push(this.paper.circle(pos.x + 30, pos.y, 30)
			.attr({fill: 'cyan', stroke: 'none', opacity: 0.1}));

	return this._renderClick(elements);
}

Placeholder.prototype._renderClick = function (set) {
	var that = this;
	set.click(function () {
		that._bigEvent(set);
	});
	return set;
}

Placeholder.prototype._bigEvent = function (elements) {
	elements.remove();
}