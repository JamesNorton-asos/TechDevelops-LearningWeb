xtest('let and const scope things differently', () => {
	function myFunction(a) {
		var myValue = 'hello';

		if (a === true) {
			var myValue = 'hello world';
		} else {
			let myValue = 'hello world';
		}
		return myValue;

	}
	expect(myFunction(true)).toBe(____);
	expect(myFunction(false)).toBe(____);
});

//you might want to google this one