Word = function (text, gaps, page) {
	this.page = page;
	this.gapIndices = this._encodeGaps(text, gaps);
	this.text = this._encodeText(text);
	this.components = this._init();
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

Word.prototype._init = function () {
	var out = [];
	for (var i = 0; i < this.text.length; i++) {
		if (this.gapIndices.indexOf(i) > -1) {
			out.push(new Gap(i, this));
		} else {
			out.push(new Letter(this.text[i], this.page));
		}
	}
	return out;
}

Word.prototype.render = function () {
	var pos = {};
	pos.x = 100;
	pos.y = 200;

	this.components.forEach(function(component) {
		component.render(pos);
		pos.x += component.elements.getBBox().width;
	});
}


// todo: improve (ontop, etc)
Word.prototype.refresh = function (index) {
	this.components[index] = new Letter(this.text[index], this.page);
	this.render();
}