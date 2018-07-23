class Square {
	constructor(size) {
		this.size = size;
	}

	get area() {
		return 'Area: ' + this.getArea();
	}

	get size() {
		return 'Size: ' + this._size;
	}

	set size(size) {
		this._size = size;
	}

	getArea() {
		return Math.pow(this.size, 2);
		// return Math.pow(this._size, 2);
	} 
}

const mySquare = new Square(10);
console.log(mySquare.area);