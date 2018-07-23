class Square {
	constructor(size) {
		this.size = size;
	}
	get size() {
		return 'Size: ' + this._size;
	}

	set size(s) {
		this._size = s;
	} 
}

const mySquare = new Square(10);
console.log(mySquare.size);