// Jest expect reference: https://facebook.github.io/jest/docs/en/expect.html

xtest('Exactly equal', () => {
	expect(true).toBe(false);
});

xtest('How else can we express ourselves?', () => {
	expect(true).not.toBe(false);
});

xtest('Deep equal', () => {

	const expected = {
		a:1,
		b:2
	};

	//is this the right assertion?
	expect(expected).toBe({
		a:1,
		b:2
	}); 
});

xtest('JavaScript really has no idea about numbers', () => {
	//close but no cigar
	expect(0.1 + 0.2).toBe(0.3);
})