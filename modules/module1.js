const bindSubmitHandlerToForm = (form, fn) => {
	form.addEventListener('submit', fn);
}

export default bindSubmitHandlerToForm