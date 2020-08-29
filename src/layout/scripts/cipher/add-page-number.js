function addPageNumber(index, sem, arrOfSems) {
	const input_page = +document.getElementById('input_page').value;
	let page;

	if (index === 0) {
		page = input_page + 1;
		return page;
	} else if (arrOfSems[index - 1].SEMType.split('-')[2] === sem.SEMType.split('-')[2] && arrOfSems[index - 1].SEMType.split('-')[3] === sem.SEMType.split('-')[3]) {
		let previousPage = +document.querySelector(`#order_sheet > div:nth-child(${index * 2}) > div > table.сipher_table > tbody > tr:nth-child(7) > td:nth-child(6)`).textContent;
		console.log(+document.querySelector(`#order_sheet > div:nth-child(${index * 2}) > div > table.сipher_table > tbody > tr:nth-child(7) > td:nth-child(6)`).textContent);
		page = previousPage + 1;
		console.log(previousPage, ' - previousPage/ same');
		return page;
	} else if (arrOfSems[index - 1].SEMType.split('-')[2] !== sem.SEMType.split('-')[2] || arrOfSems[index - 1].SEMType.split('-')[3] !== sem.SEMType.split('-')[3]) {
		// startTypeSemForNumList = sem.SEMType.split('-')[2] + sem.SEMType.split('-')[3];
		let previousPage = +document.querySelector(`#order_sheet > div:nth-child(${index * 2}) > div > table.сipher_table > tbody > tr:nth-child(7) > td:nth-child(6)`).textContent;
		// console.log(+document.querySelector(`#order_sheet > div:nth-child(${index * 2}) > div > table.сipher_table > tbody > tr:nth-child(7) > td:nth-child(5)`).textContent);
		page = previousPage + 2;
		// console.log(previousPage, ' - previousPage/ not same');
		return page;
	}
}

export default addPageNumber;
