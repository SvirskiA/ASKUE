let createInfoTable = function (sem) {
	//Создаем строку таблицы	
	let row = document.createElement("TR");

	// Создаем ячейки в вышесозданной строке
	let td1 = document.createElement("TD");
	let td2 = document.createElement("TD");
	let td3 = document.createElement("TD");

	// Наполняем ячейки
	td1.textContent = sem.SEMType;
	if (sem.counterCountInSEM === 1) {
		td2.textContent = `Установка ${sem.installation}. ${sem.description} (${sem.breaker1Value} А)`;
	} else if (sem.counterCountInSEM === 2) {
		td2.textContent = `Установка ${sem.installation}. ${sem.description} (${sem.breaker1Value} А; ${sem.breaker2Value} А)`;
	}
	td3.textContent = sem.countOfSEM;

	row.append(td1, td2, td3);
	return row;
}

export default createInfoTable;
