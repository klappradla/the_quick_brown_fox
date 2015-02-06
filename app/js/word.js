Word = function (text, gaps, page) {
	this.pos = {};
	this.pos.x = 100;
	this.pos.y = 200;
	this.page = page;
	this.gapIndices = this._encodeGaps(text, gaps);
	this.text = this._encodeText(text);
	this.components = [];
}

Word.prototype._encodeGaps = function (text, gaps) {
	var out = [];
	var index;
	gaps.forEach( function (char) {
		index = text.indexOf(char);
		if (index > -1) {
			out.push(index);
		}
	});
	return out;
}

Word.prototype._encodeText = function (text) {
	var whitespace = "\u00a0";
	return text.replace(" ", whitespace);
}

Word.prototype.render = function () {
	var component;

	for (var i = 0; i < this.text.length; i++) {
		if (this.gapIndices.indexOf(i) > -1) {
			component = new Placeholder(i, this);
			component.render(this.pos);
			component.renderItems(this.pos);
		} else {
			component = new Letter(this.text[i], this.page);
			component.render(this.pos);
		}
		this.components.push(component);
		this.pos.x += component.elements.getBBox().width;
	}
}


// todo: improve (ontop, etc)
Word.prototype.refresh = function (index) {
	this.components[index] = new Letter(this.text[index], this.page);
	this.pos.x = 100;
	this.pos.y = 200;
	this.components.forEach(function (component) {
		component.elements.remove();
		component.render(this.pos);
		this.pos.x += component.elements.getBBox().width;
	});

}