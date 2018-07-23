function Shape() {}

Shape.prototype.getArea = function() {
	console.log('The Area is: ____');
}

function Square() {}

Square.prototype = new Shape();

Square.prototype.getArea = function() {
	console.log('The Area of a square is: ____');
}

var square = new Square();
square.getArea();