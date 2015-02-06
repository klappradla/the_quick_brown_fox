var app = (function () {
	return {
		init: function () {
			var game = new Game();
			var text = "quick fox";
			var placeholder = ["i", "k"];
			game.init(text, placeholder);
		}
	}
})();

		//var whitespace = "\u00a0";
		//var word = new Word("quick fox", game.paper);
		//var testLetter = new Letter('m', playground.canvas);

		// var x = 0, y = 0;

		// var fontFamilies = [];
		// fontFamilies.push('serif', 'sans-serif', 'cursive', 'fantasy', 'monospace');
		// fontFamilies.forEach(function (fontFamily) {
		// 	var textComp = new TextComponent(playground.canvas, fontFamily);
		// 	textComp.render();
		// 	textComp.transform(x, y);
		// 	x += 70;
		// 	y += 30;
		// })
