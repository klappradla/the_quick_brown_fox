Page = function () {
	this.pos = {};
	this.pos.x;
	this.pos.y;
	this.width = 800;
	this.height = 400;
	this.fontSize = 80;
	this.backgroundColor = "#333";
	this.baseColor = "cyan";
	this.paper = Raphael(0, 0, this.width, this.height);
}

Page.prototype.init = function () {
	this.paper.rect(0, 0, this.width, this.height)
		.attr({stroke: 'none', fill: this.backgroundColor});
}