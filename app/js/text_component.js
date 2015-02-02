TextComponent = function (canvas, fontFamily) {
	this.canvas = canvas;
	this.fontFamily = fontFamily;
	this.content;
}

TextComponent.prototype.render = function () {
	this.content = this.canvas.set();
	this.content.push(
		this.canvas.circle(100, 100, 50)
			.attr({fill: '#666'}),
		this.canvas.text(100, 100, 'hello')
			.attr({fill: 'blue',
				'font-family': this.fontfamily,
				'font-size': 30})
	);

	var that = this;
	this.content.click(function () {
		that.content.glow();
	});
}

TextComponent.prototype.transform = function (x, y) {
	var tString = 't' + x + ',' + y;
	this.content.transform(tString);
}