xtest('What type are you anyway?', () => {

	//lets change the expected value to make this test pass

	const myValue = 'hello world';
	var expected = myValue;
	expected = _______;

	//the .toBe expectation uses ===
	//how can we change the value
	
	expect(expected).toBe(true);
	expect(typeof expected).toBe(_____);
});

xtest('Lets throw in an operator', () => {

	const result = (1 + '1');

	expect(result).toBe(2);
	expect(typeof result).toBe(______);
});

