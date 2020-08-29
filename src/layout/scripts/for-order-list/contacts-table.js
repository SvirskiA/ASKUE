function contactsTable(sem, dataOfProject) {

	// создание верхней таблицы опросного
	const descriptTable = document.createElement("TABLE");
	descriptTable.classList.add('descript_table');

	const tableBody = document.createElement("TBODY");
	descriptTable.append(tableBody);
	// строки
	const row1 = document.createElement("TR");
	const row2 = document.createElement("TR");
	const row3 = document.createElement("TR");
	const row4 = document.createElement("TR");
	const row5 = document.createElement("TR");
	const row6 = document.createElement("TR");
	// место где будут строки
	tableBody.append(row1, row2, row3, row4, row5, row6);

	// ячейки
	const td1_1 = document.createElement("TD");
	const td1_2 = document.createElement("TD");
	const td2_1 = document.createElement("TD");
	const td2_2 = document.createElement("TD");
	const td3_1 = document.createElement("TD");
	const td3_2 = document.createElement("TD");
	const td4_1 = document.createElement("TD");
	const td4_2 = document.createElement("TD");
	const td5_1 = document.createElement("TD");
	const td5_2 = document.createElement("TD");
	const td6_1 = document.createElement("TD");
	const td6_2 = document.createElement("TD");
	// места ячеек
	row1.append(td1_1, td1_2);
	row2.append(td2_1, td2_2);
	row3.append(td3_1, td3_2);
	row4.append(td4_1, td4_2);
	row5.append(td5_1, td5_2);
	row6.append(td6_1, td6_2);

	// Наполняем ячейки
	td1_1.textContent = 'Наименование организации';
	td2_1.textContent = 'Представитель заказчика';
	td3_1.textContent = 'Контактный телефон';
	td4_1.textContent = 'Тип щитка';
	td4_2.textContent = sem.SEMType;
	td5_1.textContent = 'Количество щитков';
	td5_2.textContent = `См. ${dataOfProject.cipher}-103-70-АУЭ.СО`;
	td6_1.textContent = 'Наименование объекта';

	return descriptTable;
}

export default contactsTable;
