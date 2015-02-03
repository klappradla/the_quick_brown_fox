var app = {
	
	init: function () {
		var playground = new Playground();
		var word = new Word("quick", playground.canvas);
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
	}
}