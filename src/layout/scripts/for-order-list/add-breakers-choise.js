import breakerDefaultType from './breaker-default-type';

// функция добавляющая форму для выключателей
function createBreakerWrapper(pairOfPhaseAndAmpere, index, outBreakerDefault, inputBreakerDefault) {
	const brakersWrapper = document.getElementById('brakers_wrapper');
	// создание обертки
	const breakerDiv = document.createElement("DIV");
	breakerDiv.classList.add('breaker_div');
	// создание верхнего Р
	const breakerP = document.createElement("P");
	breakerP.classList.add('breaker_p');
	breakerP.innerHTML = '<u>' + 'Ведите данные для ЩУЭ с отходящей линией: ' + '<b>' + pairOfPhaseAndAmpere.split(' - ')[0] + 'Ф ' + pairOfPhaseAndAmpere.split(' - ')[1] + 'A' + '</b>' + '</u>';
	// создание Р для радио
	const radioP = document.createElement("P");
	radioP.classList.add('radio_p');
	radioP.innerHTML = 'Выберите тип вводного аппарата:';
	// создание лейбла для кнопки радио №1
	const radioLabel1 = document.createElement("LABEL");
	radioLabel1.setAttribute('for', 'breaker-radio-' + index + '-1');
	radioLabel1.innerHTML = 'рубильник' + '<br>';
	// создание кнопки радио №1
	const breakerRadio1 = document.createElement("INPUT");
	breakerRadio1.setAttribute('name', 'breaker-radio-' + index);
	breakerRadio1.setAttribute('id', 'breaker-radio-' + index + '-1');
	breakerRadio1.setAttribute('type', 'radio');
	// создание лейбла для кнопки радио №2
	const radioLabel2 = document.createElement("LABEL");
	radioLabel2.setAttribute('for', 'breaker-radio-' + index + '-2');
	radioLabel2.innerHTML = 'автоматический выключатель' + '<br>';
	// создание кнопки радио №2	
	const breakerRadio2 = document.createElement("INPUT");
	breakerRadio2.setAttribute('name', 'breaker-radio-' + index);
	breakerRadio2.setAttribute('id', 'breaker-radio-' + index + '-2');
	breakerRadio2.setAttribute('checked', '');
	breakerRadio2.setAttribute('type', 'radio');
	// создание лейбла для кнопки радио №3
	const radioLabel3 = document.createElement("LABEL");
	radioLabel3.setAttribute('for', 'breaker-radio-' + index + '-3');
	radioLabel3.innerHTML = 'выключатель нагрузки';
	// создание кнопки радио №3	
	const breakerRadio3 = document.createElement("INPUT");
	breakerRadio3.setAttribute('name', 'breaker-radio-' + index);
	breakerRadio3.setAttribute('id', 'breaker-radio-' + index + '-3');
	breakerRadio3.setAttribute('type', 'radio');
	// создание Р для инпута вводного аппарата
	const inputBreakerP = document.createElement("P");
	inputBreakerP.classList.add('input-p');
	inputBreakerP.innerHTML = 'Марка, Iном. вводного аппарата:'
	// создание инпута вводного аппарата
	const inputBreaker = document.createElement("INPUT");
	inputBreaker.setAttribute('id', 'input-breaker' + index);
	inputBreaker.setAttribute('size', '20');
	inputBreaker.setAttribute('type', 'text');
	inputBreaker.setAttribute('value', inputBreakerDefault);
	// создание Р для инпута отходящего АВ
	const outBreakerP = document.createElement("P");
	outBreakerP.classList.add('input-p');
	outBreakerP.innerHTML = 'Марка, Iном. АВ на отходящих линиях:'
	// создание инпута отходящего АВ
	const outBreaker = document.createElement("INPUT");
	outBreaker.setAttribute('id', 'out-breaker' + index);
	outBreaker.setAttribute('size', '20');
	outBreaker.setAttribute('type', 'text');
	outBreaker.setAttribute('value', outBreakerDefault); // outBreakerrDefaultValue обявляется ниже в цикле

	// вставляем
	breakerDiv.append(breakerP, radioP);
	// вставляем кнопки и лейблы
	breakerDiv.append(breakerRadio1, radioLabel1, breakerRadio2, radioLabel2, breakerRadio3, radioLabel3);
	// вставляем инпуты
	breakerDiv.append(inputBreakerP, inputBreaker, outBreakerP, outBreaker);

	brakersWrapper.append(breakerDiv);
}

function addBreakersChoise(arr){
	for (let i = 0; i < arr.length; i++) {

		let breakersAmpersValues = [10, 13, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125];
	  
		let phase = arr[i].split(' - ')[0];
		let ampereOut = arr[i].split(' - ')[1];
		let ampereIn = breakersAmpersValues[breakersAmpersValues.indexOf(+ampereOut) + 1]
	  
		let outBreakerType = breakerDefaultType(+ampereOut);
		let inputBreakerType = breakerDefaultType(ampereIn);
		// значения по умочанию для инпутов ввода выключателей
		let outBreakerrDefaultValue = `${outBreakerType} ${phase}P C${ampereOut}`;
		let inputBreakerDefaultValue = `${inputBreakerType} ${phase}P C${ampereIn}`;
		createBreakerWrapper(arr[i], i, outBreakerrDefaultValue, inputBreakerDefaultValue);
	  }
}

export default addBreakersChoise;
