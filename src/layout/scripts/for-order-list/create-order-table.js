function createOrderTable(index) {

	const orderTable = document.createElement("TABLE");
	orderTable.classList.add('order_table');

	const tBody = document.createElement("TBODY");
	orderTable.appendChild(tBody);
	// строки

	for (let i = 0; i < 12; i += 1) {
		let row = document.createElement("TR");
		// row.classList.add('order_row' + index + '_' + i);
		row.classList.add('order_row', 'order_row' + index + '_' + i);
		tBody.append(row);


		for (let j = 0; j <= 2; j += 1) {
			let td = document.createElement("TD");
					// td.classList.add('td' + i + '_' + j);
			td.classList.add('td' + index + '_' + i + '_' + j);
			td.textContent = '';
			row.appendChild(td);
		}
	}

	return orderTable;
}

export default createOrderTable;
