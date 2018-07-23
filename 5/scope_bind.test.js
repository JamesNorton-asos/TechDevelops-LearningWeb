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
	const addToCalculator1 = add.bind(calculator1);
	const addToCalculator2 = add.bind(calculator2);

	addToCalculator1(1);
	addToCalculator1(5);

	addToCalculator2(3);	
	addToCalculator2(4);	

	expect(calculator1.value).toBe(____);
	expect(calculator2.value).toBe(____);

});
