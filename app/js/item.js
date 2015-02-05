Item = function (parent) {
	this.char = parent.char;
	//this.font = font;
	this.paper = parent.paper;
	this.pos = parent.pos;
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
		}
	);

}