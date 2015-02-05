Placeholder = function (char, pos, parent) {
	this.solved = false;
	this.parent = parent;
	this.paper = parent.paper;
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

Placeholder.prototype.solve = function () {
	console.log("solve placeholder -> rerender word");
	this.solved = true;
	this.elements.remove();
	this.parent.refresh();
}

Placeholder.prototype._bigEvent = function (elements) {
	elements.remove();
}

