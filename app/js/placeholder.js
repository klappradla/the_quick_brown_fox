Placeholder = function (index, pos, parent) {
	this.parent = parent;
	this.paper = parent.paper;
	this.index = index;
	this.pos = {};
	this.pos.x = pos.x;
	this.pos.y = pos.y;
	this.elements = this.paper.set();
	
	this._render(this.pos);

	//this.item;
}

Placeholder.prototype._render = function (pos) {
	this.elements.push(this.paper.circle(pos.x + 30, pos.y, 30)
		.attr({fill: 'none', stroke: 'cyan'}));
	this.elements.push(this.paper.circle(pos.x + 30, pos.y, 30)
			.attr({fill: 'cyan', stroke: 'none', opacity: 0.1}));

	this.renderItem();
}

Placeholder.prototype.renderItem = function () {
	var char = this.parent.text.charAt(this.index);
	this.item = new Item(char, this);
}

Placeholder.prototype.solve = function () {
	var pIndex = this.parent.placeholder.indexOf(this.index);
	this.parent.placeholder.splice(pIndex, 1);
	this.elements.remove();
	this.parent._render();
}

