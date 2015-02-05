Word = function (text, placeholder, paper) {
	this.paper = paper;
	this.placeholder = this._encodePlaceholder(text, placeholder);
	this.text = this._encodeWhitespace(text);
	this.elements = paper.set();

	this._render();
}

Word.prototype.WHITESPACE = "\u00a0";

Word.prototype._encodeWhitespace = function (text) {
	return text.replace(" ", this.WHITESPACE);
}

Word.prototype._encodePlaceholder = function (text, chars) {
	var out = [];
	var index;
	chars.forEach(function (char) {
		index = text.indexOf(char);
		if (index > -1 ) {
			out.push(index);
		}
	});
	return out;
}

Word.prototype._render = function () {

	// todo: reuse items...
	this.elements.remove();
	var pos = {};
	pos.x = 100;
	pos.y = 200;
	var char;
	var component;

	for (var i = 0; i < this.text.length; i++) {
		char = this.text.charAt(i);
		if (this.placeholder.indexOf(i) > -1) {
			component = new Placeholder(i, pos, this);
		} else {
			component = new Letter(char, pos, this.paper);
		}
		this.elements.push(component.elements);
		pos.x += component.elements.getBBox().width;
	}
}