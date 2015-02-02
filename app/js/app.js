var app = {
	init: function () {
		var canvas = Raphael(0, 0, 600, 400);

		var x = 0, y = 0;

		var fontFamilies = [];
		fontFamilies.push('serif', 'sans-serif', 'cursive', 'fantasy', 'monospace');
		fontFamilies.forEach(function (fontFamily) {
			var textComp = new TextComponent(canvas, fontFamily);
			textComp.render();
			textComp.transform(x, y);
			x += 70;
			y += 30;
		})
	}
}