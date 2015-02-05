Word = function (text, placeholder, paper) {
	this.paper = paper;
	this.placeholder = this._encodePlaceholder(text, placeholder);
	this.text = this._encodeWhitespace(text);
	this.elements = [];

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
	var pos = {};
	pos.x = 100;
	pos.y = 200;
	var char;
	var component;

	for (var i = 0; i < this.text.length; i++) {
		char = this.text.charAt(i);
		if (this.placeholder.indexOf(i) > -1) {
			component = new Placeholder(i, this);
			component.render(pos);
			component.renderItem(pos);
		} else {
			component = new Letter(char, this.paper);
			component.render(pos);
		}
		this.elements.push(component);
		component.render(pos);
		pos.x += component.elements.getBBox().width;
	}
}

Word.prototype.refresh = function (index) {
	this.elements[index] = new Letter(this.text.charAt(index), this.paper);
	var pos = {};
	pos.x = 100;
	pos.y = 200;
	this.elements.forEach(function (element) {
		element.elements.remove();
		element.render(pos);
		pos.x += element.elements.getBBox().width;
	});

}