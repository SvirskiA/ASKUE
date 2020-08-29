function breakerDefaultType(value) {
	let breakerType;
	if (value <= 63) {
		breakerType = 'ВА-47-29';
	} else if (value <= 100) {
		breakerType = 'ВА-47-100';
	} else if (value = 125) {
		breakerType = 'ВА-47-150';
	} else {
		breakerType = '';
	}
	return breakerType;
}

export default breakerDefaultType;
