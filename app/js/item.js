Item = function (char, parent) {
	this.char = char;
	this.parent = parent;
	//this.font = font;
	this.paper = parent.paper;
	this.pos = {};
	this.pos.x = parent.pos.x;
	this.pos.y = parent.pos.y;
	this.elements = this._renderElements();
	//placeholder = placeholder || false;
}

Item.prototype._renderElements = function () {
	this.pos.y += 100;
	var elements = this.paper.set();
	elements.push(this.paper.circle(this.pos.x + 30, this.pos.y, 30)
			.attr({fill: 'cyan', stroke: 'none'}));
	elements.push(this.paper.text(this.pos.x + 30, this.pos.y, this.char)
		.attr({'font-size': 60}));

	this._makeDraggable(elements);

	return elements;
}

Item.prototype._makeDraggable = function (elements) {
	//console.log(elements);
	var that = this;
	var lx = 0;
	var ly = 0;
	var ox = 0;
	var oy = 0;

	elements.drag(
		function onmove(dx, dy, x, y, event) {
			lx = ox + dx;
			ly = oy + dy;
			elements.transform('t' + lx + ',' + ly);
		},
		function onstart(x, y, event) {
			elements.attr({opacity: 0.5});
		},
		function onend(event) {
			elements.attr({opacity: 1});
			ox = lx;
			oy = ly
			that._checkCollision();
		}
	);
}

Item.prototype._checkCollision = function () {
	//var that = this;
	var pBox = this.parent.elements.getBBox();
	var iBox = this.elements.getBBox();
	var center = {};
	center.x = iBox.x + iBox.width / 2;
	center.y = iBox.y + iBox.height / 2;

	if (center.x > pBox.x && center.x < pBox.x2) {
		if (center.y > pBox.y && center.y < pBox.y2) {
			this.elements.remove();
			this.parent.solve();
		}
	}
}