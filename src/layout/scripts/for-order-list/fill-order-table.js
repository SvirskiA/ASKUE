function findTd(list, row, column){
	let elem = document.querySelector('.td' + list + '_' + row + '_' + column);
	return elem;
}

function createSquare (flag1, flag2, text){
	const wrapper = document.createElement('DIV');

	const square = document.createElement('DIV');
	square.classList.add('square');
	const para = document.createElement('P');
	para.textContent = text;
	if (flag1 === 1) {
		wrapper.classList.add('inline_block');
	}
	if (flag2 === 1) {
		para.classList.add('inline_block');
	}
	wrapper.append(square, para);
	return wrapper;
}

function createP (text){
	const para = document.createElement('P');
	para.textContent = text;
	return para;
}

function fillOrderTable(sem, index, arrayOfPhasesAndAmperes) {

	// Наполняем ячейки
	let td1_1 = findTd(index, 0, 0);
	td1_1.textContent = '№';

	let td1_2 = findTd(index, 0, 1);
	td1_2.textContent = 'Запрашиваемые данные';

	let td1_3 = findTd(index, 0, 2);
	td1_3.textContent = 'Ответ заказчика';

	for (let i = 1; i < 12; i += 1) {
		let td1 = findTd(index, i, 0);
		td1.textContent = i;
	}

	// Тип исполнения корпуса
	let td2_2 = findTd(index, 1, 1);
	td2_2.textContent = 'Тип исполнения корпуса';

	let td2_3 = findTd(index, 1, 2);
	td2_3.append(createSquare(1, 1, 'металлический'), 
	createSquare(1, 1,'пластмассовый'));

	if (sem.SEMType.split('-')[1] === '1') {
		td2_3.childNodes[0].childNodes[0].classList.add('square_checked');
	} else if (sem.SEMType.split('-')[1] === '2') {
		td2_3.childNodes[1].childNodes[0].classList.add('square_checked');
	}

	// Тип щитка
	let td3_2 = findTd(index, 2, 1);
	td3_2.textContent = 'Тип щитка';

	let td3_3 = findTd(index, 2, 2);
	td3_3.append(createSquare(0, 0, 'однофазный'), 
	createSquare(0, 0, 'трехфазный'),
	createSquare(0, 0, 'однофазный и трехфазный'));

	if (sem.SEMType.split('-')[2] === '1') {
		td3_3.childNodes[0].childNodes[0].classList.add('square_checked');
	} else if (sem.SEMType.split('-')[2] === '2') {
		td3_3.childNodes[1].childNodes[0].classList.add('square_checked');
	} else if (sem.SEMType.split('-')[2] === '3') {
		td3_3.childNodes[2].childNodes[0].classList.add('square_checked');
	}

	// Тип ввода
	let td4_2 = findTd(index, 3, 1);
	td4_2.textContent = 'Тип ввода';

	let td4_3 = findTd(index, 3, 2);
	td4_3.append(createSquare(1, 1, 'воздушный'), 
	createSquare(1, 1, 'кабельный'));

	if (sem.SEMType.split('-')[4] === '1' || sem.SEMType.split('-')[4] === '4') {
		td4_3.childNodes[0].childNodes[0].classList.add('square_checked');
	} else if (sem.SEMType.split('-')[4] === '2') {
		td4_3.childNodes[1].childNodes[0].classList.add('square_checked');
	}

	// Тип вводного аппарата
	let td5_2 = findTd(index, 4, 1);
	td5_2.textContent = 'Тип вводного аппарата';

	let td5_3 = findTd(index, 4, 2);
	td5_3.append(createSquare(0, 0, 'рубильник'), 
	createSquare(0, 0, 'автоматический выключатель'),
	createSquare(0, 0, 'выключатель нагрузки'));

	let indexOfbreaker1 = arrayOfPhasesAndAmperes.indexOf(sem.outBreaker1);
	let indexOfbreaker2 = arrayOfPhasesAndAmperes.indexOf(sem.outBreaker2);

	let breakerRadioChoice1_1 = document.getElementById(`breaker-radio-${indexOfbreaker1}-1`);
	let breakerRadioChoice1_2 = document.getElementById(`breaker-radio-${indexOfbreaker1}-2`);
	let breakerRadioChoice1_3 = document.getElementById(`breaker-radio-${indexOfbreaker1}-3`);

	let breakerRadioChoice2_1 = document.getElementById(`breaker-radio-${indexOfbreaker2}-1`);
	let breakerRadioChoice2_2 = document.getElementById(`breaker-radio-${indexOfbreaker2}-2`);
	let breakerRadioChoice2_3 = document.getElementById(`breaker-radio-${indexOfbreaker2}-3`);

	if (breakerRadioChoice1_1.checked) {
		td5_3.childNodes[0].childNodes[0].classList.add('square_checked');
	} else if (breakerRadioChoice1_2.checked) {
		td5_3.childNodes[1].childNodes[0].classList.add('square_checked');
	} else if (breakerRadioChoice1_3.checked) {
		td5_3.childNodes[2].childNodes[0].classList.add('square_checked');
	}
	if (breakerRadioChoice2_1 !== null && breakerRadioChoice2_1.checked) {
		td5_3.childNodes[0].childNodes[0].classList.add('square_checked');
	} else if (breakerRadioChoice2_2 !== null && breakerRadioChoice2_2.checked) {
		td5_3.childNodes[1].childNodes[0].classList.add('square_checked');
	} else if (breakerRadioChoice2_3 !== null && breakerRadioChoice2_3.checked) {
		td5_3.childNodes[2].childNodes[0].classList.add('square_checked');
	}

	// Марка, Iном АВ
	let td6_2 = findTd(index, 5, 1);
	td6_2.textContent = 'Марка, Iном вводного аппарата';

	let td6_3 = findTd(index, 5, 2);

	let inputBreaker1 = document.getElementById(`input-breaker${indexOfbreaker1}`);
	let inputBreaker2 = document.getElementById(`input-breaker${indexOfbreaker2}`);

	if (sem.counterCountInSEM === 1){
		td6_3.textContent = inputBreaker1.value;
	} else if (sem.counterCountInSEM === 2) {
		td6_3.innerHTML = inputBreaker1.value + '<br>' + inputBreaker2.value;
	}

	// Тип отходящей линии
	let td7_2 = findTd(index, 6, 1);
	td7_2.textContent = 'Тип отходящей линии';

	let td7_3 = findTd(index, 6, 2);
	td7_3.append(createSquare(1, 0, 'воздушная'), 
	createSquare(1, 0, '3ф воздушная, 1ф кабельная'),
	createSquare(1, 0, 'кабельная'),
	createSquare(1, 0, '3ф кабельная, 1ф воздушная'),
	createSquare(1, 0, '1 кабельная, 1 воздушная'));

	if (sem.SEMType.split('-')[4] === '2') {
		td7_3.childNodes[2].childNodes[0].classList.add('square_checked');
	} else if (sem.inputFromSem.toLowerCase() === 'в' || sem.inputFromSem.toLowerCase() === 'вв') {
		td7_3.childNodes[0].childNodes[0].classList.add('square_checked');
	} else if (sem.inputFromSem.toLowerCase() === '1фк') {
		td7_3.childNodes[1].childNodes[0].classList.add('square_checked');
	} else if (sem.inputFromSem.toLowerCase() === 'к' || sem.inputFromSem.toLowerCase() === 'кк') {
		td7_3.childNodes[2].childNodes[0].classList.add('square_checked');
	} else if (sem.inputFromSem.toLowerCase() === '3фк') {
		td7_3.childNodes[3].childNodes[0].classList.add('square_checked');
	} else if (sem.inputFromSem.toLowerCase() === 'вк' || sem.inputFromSem.toLowerCase() === 'кв') {
		td7_3.childNodes[4].childNodes[0].classList.add('square_checked');
	} else {
		alert(`что-то не то с типом отходящей в ${sem}. Проверяйте ${sem.inputFromSem}`);
	}

	// Марка, Iном. АВ
	let td8_2 = findTd(index, 7, 1);
	td8_2.textContent = 'Марка, Iном. автоматического выключателя на отходящих линиях';

	let td8_3 = findTd(index, 7, 2);

	let outBreaker1 = document.getElementById(`out-breaker${indexOfbreaker1}`);
	let outBreaker2 = document.getElementById(`out-breaker${indexOfbreaker2}`);

	if (sem.counterCountInSEM === 1){
		td8_3.textContent = outBreaker1.value;
	} else if (sem.counterCountInSEM === 2) {
		td8_3.innerHTML = outBreaker1.value + '<br>' + outBreaker2.value;
	}


	// Количество счетчиков	
	let td9_2 = findTd(index, 8, 1);
	td9_2.textContent = 'Количество счетчиков';

	let td9_3 = findTd(index, 8, 2);
	td9_3.append(createSquare(1, 1, '1'), 
	createSquare(1, 1, '2'));

	if (sem.counterCountInSEM === 1) {
		td9_3.childNodes[0].childNodes[0].classList.add('square_checked');
	} else if (sem.counterCountInSEM === 2) {
		td9_3.childNodes[1].childNodes[0].classList.add('square_checked');
	}

	// Марка счетчика
	let td10_2 = findTd(index, 9, 1);
	td10_2.textContent = 'Марка счетчика';

	let td10_3 = findTd(index, 9, 2);

	let counter1f = document.getElementById('counter-1f');
	let counter3f = document.getElementById('counter-3f');

	if (sem.counterCountInSEM === 1 && sem.phase1Value === 1) {
		td10_3.textContent = counter1f.value;
	} else if (sem.counterCountInSEM === 1 && sem.phase1Value === 3) {
		td10_3.textContent = counter3f.value;
	} else if (sem.counterCountInSEM === 2 && sem.phase1Value === 1 && sem.phase2Value === 1) {
		// td10_3.innerHTML = counter1f.value + '<br>' + counter1f.value;
		td10_3.textContent = counter1f.value;
	} else if (sem.counterCountInSEM === 2 && sem.phase1Value === 3 && sem.phase2Value === 3) {
		// td10_3.innerHTML = counter2f.value + '<br>' + counter2f.value;
		td10_3.textContent = counter3f.value;
	} else if (sem.counterCountInSEM === 2 && sem.phase1Value === 3 && sem.phase2Value === 1) {
		td10_3.innerHTML = counter3f.value + '<br>' + counter1f.value;
	} else { alert(`что-то не то с фазами у счетчика в ${sem.SEMType}`)}

	// Способ установки
	let td11_2 = findTd(index, 10, 1);
	td11_2.textContent = 'Способ установки щитка';

	let td11_3 = findTd(index, 10, 2);
	td11_3.append(createSquare(0, 0, 'на железобетонной опоре'), 
	createSquare(0, 0, 'на выносной стойке'),
	createSquare(0, 0, 'на внешней стене здания'),
	createSquare(0, 0, 'на железобетонной приставке ПТ43-2'));

	if (sem.SEMType.split('-')[4] === '1') {
		td11_3.childNodes[0].childNodes[0].classList.add('square_checked');
	} else if (sem.SEMType.split('-')[4] === '2') {
		td11_3.childNodes[1].childNodes[0].classList.add('square_checked');
	} else if (sem.SEMType.split('-')[4] === '3') {
		td11_3.childNodes[2].childNodes[0].classList.add('square_checked');
	} else if (sem.SEMType.split('-')[4] === '4') {
		td11_3.childNodes[3].childNodes[0].classList.add('square_checked');
	}

	// Арматура для установки
	let td12_2 = findTd(index, 11, 1);
	td12_2.textContent = 'Арматура для установки и крепления щитка (в зависимости от способа установки)';

	let td12_3 = findTd(index, 11, 2);
	td12_3.append(createP ('-установка на железобетонной опоре:'), 
	createSquare(0, 0, 'к опоре СВ-95'), 
	createSquare(0, 0, 'к опоре СВ-110'),
	createP ('-установка на выносной стойке:'),
	createSquare(0, 0, 'к выносной стойке'),
	createP ('-установка на внешней стене здания:'),
	createSquare(0, 0, 'к внешней стене здания'),
	createP ('-установка на железобетонной приставке ПТ43-2:'),
	createSquare(0, 0, 'к приставке ПТ43-2 (только воздушный ввод)'));

	if (sem.SEMType.split('-')[4] === '1' && sem.pillarType.toLowerCase() == 'св-95') {
		td12_3.childNodes[1].childNodes[0].classList.add('square_checked');
	} else if (sem.SEMType.split('-')[4] === '1' && sem.pillarType.toLowerCase() == 'св-110') {
		td12_3.childNodes[2].childNodes[0].classList.add('square_checked');
	} else if (sem.SEMType.split('-')[4] === '2') {
		td12_3.childNodes[4].childNodes[0].classList.add('square_checked');
	} else if (sem.SEMType.split('-')[4] === '3') {
		td12_3.childNodes[6].childNodes[0].classList.add('square_checked');
	} else if (sem.SEMType.split('-')[4] === '4') {
		td12_3.childNodes[8].childNodes[0].classList.add('square_checked');
	}

}

export default fillOrderTable;
