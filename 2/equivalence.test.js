xtest('Are they equal?', () => {
	//the .toBe expectation uses ===
	expect(true).toBe('true');
});

xtest('Are they really equal?', () => {
	
	const result = (true == 'true');

	expect(result).toBe(true);
});

xtest('Are they really equal?', () => {

	//what is happening here?

	expect(true).toBe(1);
	expect(1).toBeTruthy();
});

xtest('Now what is going on here?', () => {

	const result = (1 == '1');

	expect(result).toBe(false);
});

xtest('Undefined, or is it?', () => {
	//try uncommenting the lines below one at a time and see what happens
	//then try uncommenting all the lines at the same time

	// undefined = 'undefined';
	// undefined = null;
	// var undefined = 'undefined';
	
	function myFunction() {
		return undefined;
	}
	expect(myFunction()).toBeUndefined();
});

xtest('Surely these are equal...?', () => {
	//NaN means "Not a Number" and is a special object in JavaScript
	//for instance: 
	//	anything divided by zero is NaN (you can't divide by zero, it is an error)
	//	a string value (that is not a number itself) is NaN

	expect(NaN).toBe(NaN);
	expect(isNaN(NaN)).toBe(____);
})

