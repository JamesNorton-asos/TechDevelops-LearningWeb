class Shape {
	whatAmI() {
		return 'This shape is a ';
	}
}

class Square extends Shape {
	constructor(size) {
		super(); //must be called if sub-class has a constructor
		this.size = size;
	}

	get size() {
		return 'Size: ' + this._size;
	}

	set size(size) {
		this._size = size;
	}

	whatAmI() {
		return super.whatAmI() + 'square';
	}
}


const mySquare = new Square(10);
console.log(mySquare.whatAmI());