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


Placeholder = function(word, char, canvas) {
	this.word = word;
	this.char = char;
	this.canvas = canvas;
	this.element = this.canvas.page.set();
}

Placeholder.prototype.render = function (x, y) {	
	this.element.push(this.canvas.page.circle(x + 30, y, 30)
		.attr({fill: 'none', stroke: 'cyan'}));
	this.element.push(this.canvas.page.circle(x + 30, y, 30)
			.attr({fill: 'cyan', stroke: 'none', opacity: 0.1}));
	this._buildClick();
	this.canvas.elements.push(this.element);
	return this.element;
}

Placeholder.prototype._buildClick = function () {
	var that = this;
	this.element.click(function () {
		that.word.rerender();
		//that.element.remove();
	})
}


Word = function(text, canvas) {
	this.solved = false;
	this.canvas = canvas;
	this.text = text;
	this.elements = this.canvas.page.set();
	this.render();
}

Word.prototype.render = function () {
	var x = 100;
	var y = 100;
	var currentChar;
	var currentElement;
	var element;
	var bBox;

	for (var i = 0; i < this.text.length; i++) {
		currentChar = this.text.charAt(i);
		if (currentChar === 'i' && !this.solved) {
			element = new Placeholder(this, 'i', this.canvas);
		} else {
			element = new Letter(currentChar, this.canvas);
		}
		currentElement = element.render(x, y);
		this.elements.push(currentElement);
		bBox = currentElement.getBBox();
		x += bBox.width;
	}

}

Word.prototype.rerender = function () {
	console.log("call rerender");
	this.solved = true;
	this.elements.remove();
	this.elements = this.canvas.page.set();
	// this.elements.forEach(function (e) {
	// 	console.log(e);
	// 	e.remove();
	// });
	this.render();
}