function Shape() {}

Shape.prototype.getArea = function() {
	console.log('The Area is: ____');
}

function Square() {}

Square.prototype = new Shape();

var square = new Square();
square.getArea();