Item = function (char, parent) {
	this.char = char;
	this.parent = parent;
	//this.font = font;
	this.paper = parent.paper;
	this.elements = this.paper.set();
	//placeholder = placeholder || false;
}

Item.prototype.render = function (pos) {
	var iPos = {}
	iPos.x = pos.x;
	iPos.y = pos.y;
	iPos.y += 100;
	this.elements.push(this.paper.circle(iPos.x + 30, iPos.y, 30)
			.attr({fill: 'cyan', stroke: 'none'}));
	this.elements.push(this.paper.text(iPos.x + 30, iPos.y, this.char)
		.attr({'font-size': 60}));

	this._makeDraggable();
}

Item.prototype._makeDraggable = function () {
	//console.log(elements);
	var that = this;
	var lx = 0;
	var ly = 0;
	var ox = 0;
	var oy = 0;

	this.elements.drag(
		function onmove(dx, dy, x, y, event) {
			lx = ox + dx;
			ly = oy + dy;
			that.elements.transform('t' + lx + ',' + ly);
		},
		function onstart(x, y, event) {
			that.elements.attr({opacity: 0.5});
		},
		function onend(event) {
			that.elements.attr({opacity: 1});
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