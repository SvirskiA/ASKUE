function addOrderPageNumber(index, sem, arrOfSems) {
	
	const input_page = localStorage.getItem('userOrderPageInput');

	if (index === 0) {
		return +input_page + 1;
	} else if (arrOfSems[index - 1].SEMType.split('-')[2] === sem.SEMType.split('-')[2] 
		&& arrOfSems[index - 1].SEMType.split('-')[3] === sem.SEMType.split('-')[3]) {
		const previousPage = +document.querySelector(`#order_sheet > div:nth-child(${index * 2}) > div > table.сipher_table > tbody > tr:nth-child(7) > td:nth-child(6)`).textContent;

		return +previousPage + 1;
	} else if (arrOfSems[index - 1].SEMType.split('-')[2] !== sem.SEMType.split('-')[2] 
		|| arrOfSems[index - 1].SEMType.split('-')[3] !== sem.SEMType.split('-')[3]) {
		const previousPage = +document.querySelector(`#order_sheet > div:nth-child(${index * 2}) > div > table.сipher_table > tbody > tr:nth-child(7) > td:nth-child(6)`).textContent;

		return previousPage + 2;
	}
}

function addOrderShemePageNumber(index, shemePages) {
	
	const input_page = localStorage.getItem('userOrderPageInput');

	console.log(shemePages);
	console.log(input_page, shemePages[index], index);

	return +input_page + shemePages[index] + index;
}
//
function addShemeScopeOfWorksPageNumber(index) {
	
	const input_page = localStorage.getItem('userWorksPageInput');

	console.log(input_page, index);

	return +input_page + index;
}

function addScopeOfWorksPageNumber(index, shemePagesSum) {
	
	const input_page = localStorage.getItem('userWorksPageInput');

	console.log(input_page, index, shemePagesSum);

	return +input_page + index +shemePagesSum.length;
}
//
export { addOrderPageNumber,  addOrderShemePageNumber, addShemeScopeOfWorksPageNumber, addScopeOfWorksPageNumber} ;
