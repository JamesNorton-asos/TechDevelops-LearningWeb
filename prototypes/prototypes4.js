//static methods

function Shape() {}

Shape.prototype.getArea = function() {
	console.log('The Area is: ____');
}

function Square() {}

Square.getArea = function() {
	console.log('This is a static method');
}

Square.prototype = new Shape();

var sqaure = new Square();
sqaure.getArea();
// Square.getArea()