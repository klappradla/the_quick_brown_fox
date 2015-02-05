Word = function (text, paper) {
	this.paper = paper;
	this.text = this._encodeWhitespace(text);
	this.content = [];
	this.placeholders = [];

	this._render();
}

Word.prototype.WHITESPACE = "\u00a0";

Word.prototype._encodeWhitespace = function (text) {
	console.log(Object.getPrototypeOf(this) == Word.prototype);
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
		if (currentChar === 'i') {
			component = new Placeholder('i', pos, this);
			this.placeholders.push(component);
		} else {
			component = new Letter(currentChar, this.paper, pos);
		}
		this.content.push(component);
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

Word.prototype.refresh = function () {
	var that = this;
	this.content.forEach(function (item) {
		item.elements.remove();
		if (Object.getPrototypeOf(item) == Placeholder.prototype) {
			if (item.solved) {
				for (var i = 0; i < that.placeholders.length; i++) {
					if (that.placeholders[i] === item) {
						that.placeholders.splice(i, 1);
						break;
					}
				}
				item = new Letter(item.char, item.paper, item.pos);
			}
		}
		item._render();
	})
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