var form = document.querySelector('form');
var formValueOutputs = document.querySelector('.formValuesOutput');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
	e.preventDefault();

	handleTextField('firstname');
	handleTextField('surname');
}

function handleTextField(fieldName) {
	var field = form.querySelector('#' + fieldName);
	var value = field.value;
	formValueOutputs.querySelector('.' + fieldName + ' span').innerHTML = value;
}