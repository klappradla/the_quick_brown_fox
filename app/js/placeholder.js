Placeholder = function (index, parent) {
	this.parent = parent;
	this.paper = parent.paper;
	this.index = index;
	this.elements = this.paper.set();
	//this.item;
}

Placeholder.prototype.render = function (pos) {
	this.elements.push(this.paper.circle(pos.x + 30, pos.y, 30)
		.attr({fill: 'none', stroke: 'cyan'}));
	this.elements.push(this.paper.circle(pos.x + 30, pos.y, 30)
			.attr({fill: 'cyan', stroke: 'none', opacity: 0.1}));
}

Placeholder.prototype.renderItem = function (pos) {
	var char = this.parent.text.charAt(this.index);
	this.item = new Item(char, this);
	this.item.render(pos);
}

Placeholder.prototype.solve = function () {
	this.elements.remove();
	this.parent.refresh(this.index); // index in elements array
}

