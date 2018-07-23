function Shape() {
	this.getArea = function() {
		console.log('Internally defined getArea')
	}
}

Shape.prototype.getArea = function() {
	console.log('The Area is: ____');
}

function Square() {}

Square.prototype = new Shape();

Square.prototype.getArea = function() {
	console.log('The Area of a square is: ____');
}

// var triangle = new Shape();
// triangle.getArea();

// var square = new Square();
// square.getArea();