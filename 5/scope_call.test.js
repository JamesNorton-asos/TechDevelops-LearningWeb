class AddThings {
	constructor() {
		this.value = 0;
	}
}

//this doesn't work with an arrow function
function add(val) {
	this.value = this.value + val;
}

xtest('Call me!', () => {
	const calculator1 = new AddThings();
	const calculator2 = new AddThings();


	add.call(calculator1, 1);
	add.call(calculator1, 5);

	add.call(calculator2, 3);
	add.call(calculator2, 4);

	expect(calculator1.value).toBe(____);
	expect(calculator2.value).toBe(____);

});
