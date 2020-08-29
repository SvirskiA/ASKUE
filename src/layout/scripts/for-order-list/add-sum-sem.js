function addSumSem(arrOfSem) {
	const tbody = document.getElementById('info_table').getElementsByTagName('TBODY')[0];

	//Создаем строку таблицы и добавляем ее		
	const row1 = document.createElement("TR");
	const row2 = document.createElement("TR");
	tbody.append(row1, row2);
	// Создаем ячейки в вышесозданной строке
	// и добавляем тх
	const td1_1 = document.createElement("TD");
	td1_1.classList.add('last_td');
	const td1_2 = document.createElement("TD");
	td1_2.classList.add('last_td');
	const td1_3 = document.createElement("TD");
	td1_3.classList.add('last_td');

	const td2_1 = document.createElement("TD");
	td2_1.classList.add('last_td');
	const td2_2 = document.createElement("TD");
	td2_2.classList.add('last_td');
	const td2_3 = document.createElement("TD");
	td2_3.classList.add('last_td');

	row1.append(td1_1, td1_2, td1_3);
	row2.append(td2_1, td2_2, td2_3);

	let sumOfCount = 0;
	let sumOfSem = 0;

	for (let i = 0; i < arrOfSem.length; i += 1) {
		sumOfSem += arrOfSem[i].countOfSEM;
		sumOfCount += arrOfSem[i].countOfSEM * arrOfSem[i].counterCountInSEM;
	}

	// Наполняем ячейки
	td1_2.innerHTML = 'Всего счетчиков:';
	td1_3.innerHTML = sumOfCount;

	td2_2.innerHTML = 'Всего щитков:';
	td2_3.innerHTML = sumOfSem;
}

export default addSumSem;
