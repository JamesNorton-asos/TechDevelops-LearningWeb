const functions = {
	f1: myOuterFunction
};

function myOuterFunction() {

	var myValue = 'hello world';
	
	functions.f2 = function myInnerFunction() {
		console.log(myValue);

		functions.f3 = function myInnerInnerFunction() {
			console.log(myValue);
		}

	}

}


functions.f1();
functions.f2();
functions.f3();