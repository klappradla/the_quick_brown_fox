Playground = function () {
	this.width = 800;
	this.height = 400;
	this.canvas = {};
	this.canvas.page = Raphael(0, 0, this.width, this.height);
	this.canvas.elements = this.canvas.page.set();
	this._render();
}

Playground.prototype._render = function () {
	var background = this.canvas.page.rect(0, 0, this.width, this.height)
		.attr({stroke: 'none', fill: '#333'});
	this.canvas.elements.push(background);
}