function mainObjectCollect(str) {
	let arrayOfUserInput = str.split('\n');

	let resultArray = [];

	let legendArray = arrayOfUserInput[0].split(',');

	function SEM(arr) {

		this.countOfSEM = +arr[legendArray.indexOf('Количество')];
		this.breaker1Value = +arr[legendArray.indexOf('IНОМ_АВ1')].split(' ')[0];
		this.breaker2Value = +arr[legendArray.indexOf('IНОМ_АВ2')].split(' ')[0] || null;
		this.SEMType = arr[legendArray.indexOf('ТИП_ЩУЭ')];
		this.counterCountInSEM = +this.SEMType.split('-')[3];

		if (this.counterCountInSEM === 1
			&& arr[legendArray.indexOf('ТИП_ВВОДА')].length === 0) {
			this.inputFromSem = 'В';
		} else if (this.counterCountInSEM === 1) {
			this.inputFromSem = arr[legendArray.indexOf('ТИП_ВВОДА')];
		} else if (this.counterCountInSEM === 2
			&& arr[legendArray.indexOf('ТИП_ВВОДА')].length === 0) {
			this.inputFromSem = 'ВВ';
		} else {
			this.inputFromSem = arr[legendArray.indexOf('ТИП_ВВОДА')];
		}

		this.pillarType = arr[legendArray.indexOf('ТИП_ОПОРЫ')] || 'СВ-95';

		if (this.SEMType.split('-')[2] === '3') {
			this.phase1Value = 3;
			this.phase2Value = 1;
		} else if (this.SEMType.split('-')[2] === '2'
			&& this.counterCountInSEM === 2) {
			this.phase1Value = 3;
			this.phase2Value = 3;
		} else if (this.SEMType.split('-')[2] === '1'
			&& this.counterCountInSEM === 2) {
			this.phase1Value = 1;
			this.phase2Value = 1;
		} else if (this.SEMType.split('-')[2] === '2'
			&& this.counterCountInSEM === 1) {
			this.phase1Value = 3;
			this.phase2Value = null;
		} else if (this.SEMType.split('-')[2] === '1'
			&& this.counterCountInSEM === 1) {
			this.phase1Value = 1;
			this.phase2Value = null;
		}

		this.outBreaker1 = `${this.phase1Value} - ${this.breaker1Value}`;
		this.counterCountInSEM === 2 ?
			this.outBreaker2 = `${this.phase2Value} - ${this.breaker2Value}` :
			this.outBreaker2 = null;


		if (this.counterCountInSEM === 1 && this.inputFromSem.toLowerCase() === 'в') {
			this.description = 'Отходящая линия: воздушная.';
		} else if (this.counterCountInSEM === 1 && this.inputFromSem.toLowerCase() === 'к') {
			this.description = 'Отходящая линия: кабельная.';
		} else if (this.counterCountInSEM === 2
			&& (this.inputFromSem.toLowerCase() === 'к') || (this.inputFromSem.toLowerCase() === 'кв') || (this.inputFromSem.toLowerCase() === 'вк')) {
			this.description = 'Отходящие линии: кабельная и воздушная.';
		} else if (this.counterCountInSEM === 2
			&& this.inputFromSem.toLowerCase() === 'кк') {
			this.description = 'Отходящие линии: кабельные.';
		} else if (this.counterCountInSEM === 2
			&& this.inputFromSem.toLowerCase() === '1фк') {
			this.description = 'Отходящие линии: 3ф - воздушная, 1ф - кабельная.';
		} else if (this.counterCountInSEM === 2
			&& this.inputFromSem.toLowerCase() === '3фк') {
			this.description = 'Отходящие линии: 3ф - кабельная, 1ф - воздушная.';
		} else if (this.counterCountInSEM === 2
			&& this.inputFromSem.toLowerCase() === 'вв') {
			this.description = 'Отходящие линии: воздушные.';
		} else {
			alert(`${this.inputFromSem} не соответствует ${this.SEMType}, перепроверьте вводимые данные`);
		}

		if (this.SEMType.split('-')[4] === '1' && this.pillarType.toLowerCase() === 'св-95') {
			this.installation = 'на опоре СВ-95';
		} else if (this.SEMType.split('-')[4] === '1' && this.pillarType.toLowerCase() === 'св-110') {
			this.installation = 'на опоре СВ-110';
		} else if (this.SEMType.split('-')[4] === '2') {
			this.installation = 'на выносной стойке';
		} else if (this.SEMType.split('-')[4] === '3') {
			this.installation = 'на внешней стене здания';
		} else if (this.SEMType.split('-')[4] === '4') {
			this.installation = 'на железобетонной приставке ПТ43-2';
		}

		if (this.counterCountInSEM === 1) {
			this.fullDecription = `${this.SEMType} (${this.breaker1Value} А). ${this.description} Установка ${this.installation}. Опросный лист`;
			this.decriptionForWorks = `${this.SEMType}. ${this.description} Установка ${this.installation}`;
		} else if (this.counterCountInSEM === 2) {
			this.fullDecription = `${this.SEMType} (${this.breaker1Value} А; ${this.breaker2Value} А). ${this.description} Установка ${this.installation}. Опросный лист`;
			this.decriptionForWorks = `${this.SEMType}. ${this.description} Установка ${this.installation}`;

		}
	}

	for (let i = 1; i < arrayOfUserInput.length; i += 1) {
		if (arrayOfUserInput[i].split(',').length === 6) {
			resultArray.push(new SEM(arrayOfUserInput[i].split(',')));
		} else if (arrayOfUserInput[i].split(',').length > 4) {
			alert(`длина массива ${arrayOfUserInput[i]} = ${arrayOfUserInput[i].split(',').length} вместо 6 \n данный массив не будет обработан`);
		  }
	}
	console.log(resultArray);

	resultArray.sort((a, b) => {
		if (a.SEMType > b.SEMType) {
			return 1;
		} else {
			return -1;
		}
	});

	return resultArray;
}

export default mainObjectCollect;
