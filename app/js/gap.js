Gap = function (index, parent) {
	this.parent = parent;
	this.page = parent.page;
	this.index = index;
	this.elements = this.page.paper.set();
	this.item;
}

Gap.prototype.render = function (pos) {
	this._clearOld(this.elements);
	this._drawGap(pos);
	this._renderItems(pos);
}

Gap.prototype._renderItems = function (pos) {
	if (this.item === undefined) {
		var char = this.parent.text[this.index];
		this.item = new Item(char, this);
		this.item.render(pos);
	}
}

Gap.prototype._drawGap = function (pos) {
	this.elements.push(this.page.paper.circle(pos.x + 30, pos.y, 30)
		.attr({fill: 'none', stroke: this.page.baseColor}));
	this.elements.push(this.page.paper.circle(pos.x + 30, pos.y, 30)
			.attr({fill: this.page.baseColor, stroke: 'none', opacity: 0.1}));
}

Gap.prototype.solve = function () {
	this.elements.remove();
	this.parent.refresh(this.index); // index in elements array
}

Gap.prototype._clearOld = function (set) {
	if (set.length > 0) {
		set.remove();
	}
}