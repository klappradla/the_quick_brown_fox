Word = function (text, paper) {
	this.solved = false;
	this.paper = paper;
	this.text = this._encodeWhitespace(text);

	this.placeholders = [];

	this._render();
}

Word.prototype.WHITESPACE = "\u00a0";

Word.prototype._encodeWhitespace = function (text) {
	return text.replace(" ", this.WHITESPACE);
}

Word.prototype._render = function () {
	var pos = {};
	pos.x = 100;
	pos.y = 200;
	var currentChar;
	var component;

	for (var i = 0; i < this.text.length; i++) {
		currentChar = this.text.charAt(i);
		if (currentChar === 'i' && !this.solved) {
			component = new Placeholder('i', this.paper, pos);
			this.placeholders.push(component);
		} else {
			component = new Letter(currentChar, this.paper, pos);
		}
		pos.x += component.elements.getBBox().width;
	}

	this._renderTypeItems();
}

Word.prototype._renderTypeItems = function () {
	this.placeholders.forEach(function (placeholder) {
		placeholder.renderItem();
		//console.log(placeholder);
	});
}



// Word = function(text, canvas) {
// 	console.log(text.length);
// 	this.solved = false;
// 	this.canvas = canvas;
// 	text = text.replace(" ",'\u00a0');
// 	this.text = text;
// 	this.elements = this.canvas.page.set();
// 	this.render();
// }

// Word.prototype.render = function () {
// 	var x = 100;
// 	var y = 200;
// 	var currentChar;
// 	var currentElement;
// 	var element;
// 	var bBox;

// 	for (var i = 0; i < this.text.length; i++) {
// 		currentChar = this.text.charAt(i);
// 		console.log("char: " + currentChar);
// 		if (currentChar === 'i' && !this.solved) {
// 			element = new Placeholder(this, 'i', this.canvas);
// 		} else {
// 			element = new Letter(currentChar, this.canvas);
// 		}
// 		currentElement = element.render(x, y);
// 		this.elements.push(currentElement);
// 		bBox = currentElement.getBBox();
// 		x += bBox.width;
// 	}

// }

// Word.prototype.rerender = function () {
// 	console.log("call rerender");
// 	this.solved = true;
// 	this.elements.remove();
// 	this.elements = this.canvas.page.set();
// 	this.render();
// }