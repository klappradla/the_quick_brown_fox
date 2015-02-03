Letter = function (char, canvas) {
	this.char = char;
	this.canvas = canvas;
	//this.elements();
	//this._render();
}

Letter.prototype.render = function (x, y) {
	//var x = 100;
	//var y = 100;
	var element = this.canvas.page.text(x, y, this.char)
		.attr({fill: 'cyan',
					'text-anchor': 'start',
					'font-size': 80});
	this.canvas.elements.push(element);
	return element;
}

Word = function(text, canvas) {
	this.canvas = canvas;
	this.text = text;
	this._render();
}

Word.prototype._render = function () {
	var x = 100;
	var y = 100;

	for (var i = 0; i < this.text.length; i++) {
		var currentLetter = new Letter(this.text.charAt(i), this.canvas);
		var element = currentLetter.render(x, y);
		var bBox = element.getBBox();
		x += bBox.width;
	}

}