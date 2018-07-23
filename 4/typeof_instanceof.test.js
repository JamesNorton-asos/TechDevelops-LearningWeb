xtest('Sometimes things work as you expect', () => {
	const myFunction = function () {};
	expect(myFunction instanceof Function).toBe(____);
	expect(typeof myFunction).toBe(____);
});

xtest('Sometimes things make sense', () => {
	expect([] instanceof Array).toBe(____);
	expect([] instanceof Object).toBe(____);
});

xtest('Sometimes they dont', () => {
	const regularExpression = new RegExp();
	expect(regularExpression instanceof RegExp).toBe(____);
	expect(typeof regularExpression).toBe(____);
});

xtest('And lets try our own "type"', () => {
	class Dog {

	}

	const myTestInstance = new Dog();

	expect(myTestInstance instanceof Dog).toBe(____);
	expect(typeof myTestInstance).toBe(____);

});

xtest('And lets try our own "type"', () => {
	class Dog {

	}

	class Spaniel extends Dog {

	}

	const myTestInstance = new Spaniel();

	expect(myTestInstance instanceof Spaniel).toBe(____);
	expect(myTestInstance instanceof Dog).toBe(____);
	expect(typeof myTestInstance).toBe(____);

});