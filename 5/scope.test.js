class myClass {
	getScope() {
		return this;
	}
}

xtest('"this" means something', () => { 
	//what scope does the method call run in?
	//ie what is the value of "this"?
	const myInstance = new myClass();
	expect(myInstance.getScope()).toBe(____);
});

xtest('do two instances share a scope?', () => {
	const myInstance = new myClass();
	const myInstance2 = new myClass();

	expect(myInstance.getScope()).toBe(myInstance2.getScope());
});

