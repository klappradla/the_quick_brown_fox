Placeholder = function (char, paper, pos) {
	this.paper = paper;
	this.char = char;
	this.pos = {};
	this.pos.x = pos.x;
	this.pos.y = pos.y;
	this.elements = this._render();

	this.item;
}

Placeholder.prototype._render = function () {
	var elements = this.paper.set();
	elements.push(this.paper.circle(this.pos.x + 30, this.pos.y, 30)
		.attr({fill: 'none', stroke: 'cyan'}));
	elements.push(this.paper.circle(this.pos.x + 30, this.pos.y, 30)
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

Placeholder.prototype.renderItem = function () {
	this.item = new Item(this);
}

Placeholder.prototype._bigEvent = function (elements) {
	elements.remove();
}

