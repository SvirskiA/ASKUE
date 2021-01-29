import { addOrderPageNumber,  addOrderShemePageNumber, addShemeScopeOfWorksPageNumber, addScopeOfWorksPageNumber} from './add-page-number';

function addCipherTable(project, subsection, typeOfPage, sem, index, mainObj, shemePages) {

	console.log(mainObj)
	const сipherTable = document.createElement("TABLE");
	сipherTable.classList.add('сipher_table');

	const tbody = document.createElement("TBODY");
	сipherTable.append(tbody);
	// строки
	
	const row_1 = document.createElement("TR");
	const row_2 = document.createElement("TR");
	const row_3 = document.createElement("TR");
	const row_4 = document.createElement("TR");
	const row_5 = document.createElement("TR");
	const row_6 = document.createElement("TR");
	const row_7 = document.createElement("TR");
	const row_8 = document.createElement("TR");
	const row_9 = document.createElement("TR");
	const row_10 = document.createElement("TR");
	const row_11 = document.createElement("TR");


	// место где будут строки
	tbody.append(row_1, row_2, row_3, row_4, row_5, row_6, row_7, row_8, row_9, row_10, row_11);

// const row1 = tbody[0];
/*
for (let i = 0; i < 11; i += 1) {
	const row = document.createElement("TR");
	tbody.append(row);
for (let i = 0; i < 7; i += 1) {
	const row = tbody.childNodes[0];
	console.log(tbody.childNodes)
	const td = document.createElement("TD");
	row.append(td);
}
*/
// console.log(row1)
	// ячейки
	const td1_1 = document.createElement("TD");
	const td1_2 = document.createElement("TD");
	const td1_3 = document.createElement("TD");
	const td1_4 = document.createElement("TD");
	const td1_5 = document.createElement("TD");
	const td1_6 = document.createElement("TD");
	const td1_7 = document.createElement("TD");
	td1_7.setAttribute('colspan', '4');
	td1_7.setAttribute('rowspan', '2');

	const td2_1 = document.createElement("TD");
	const td2_2 = document.createElement("TD");
	const td2_3 = document.createElement("TD");
	const td2_4 = document.createElement("TD");
	const td2_5 = document.createElement("TD");
	const td2_6 = document.createElement("TD");

	const td3_1 = document.createElement("TD");
	const td3_2 = document.createElement("TD");
	const td3_3 = document.createElement("TD");
	const td3_4 = document.createElement("TD");
	const td3_5 = document.createElement("TD");
	const td3_6 = document.createElement("TD");
	const td3_7 = document.createElement("TD");
	td3_7.setAttribute('colspan', '4');
	td3_7.setAttribute('rowspan', '3');

	const td4_1 = document.createElement("TD");
	const td4_2 = document.createElement("TD");
	const td4_3 = document.createElement("TD");
	const td4_4 = document.createElement("TD");
	const td4_5 = document.createElement("TD");
	const td4_6 = document.createElement("TD");

	const td5_1 = document.createElement("TD");
	const td5_2 = document.createElement("TD");
	const td5_3 = document.createElement("TD");
	const td5_4 = document.createElement("TD");
	const td5_5 = document.createElement("TD");
	const td5_6 = document.createElement("TD");

	const td6_1 = document.createElement("TD");
	td6_1.setAttribute('colspan', '2');
	const td6_2 = document.createElement("TD");
	td6_2.setAttribute('colspan', '2');
	const td6_3 = document.createElement("TD");
	const td6_4 = document.createElement("TD");
	const td6_5 = document.createElement("TD");
	td6_5.setAttribute('rowspan', '3');
	const td6_6 = document.createElement("TD");
	const td6_7 = document.createElement("TD");
	const td6_8 = document.createElement("TD");

	const td7_1 = document.createElement("TD");
	td7_1.setAttribute('colspan', '2');
	const td7_2 = document.createElement("TD");
	td7_2.setAttribute('colspan', '2');
	const td7_3 = document.createElement("TD");
	const td7_4 = document.createElement("TD");
	const td7_5 = document.createElement("TD");
	td7_5.setAttribute('rowspan', '2');
	const td7_6 = document.createElement("TD");
	td7_6.setAttribute('rowspan', '2');
	const td7_7 = document.createElement("TD");
	td7_7.setAttribute('rowspan', '2');

	const td8_1 = document.createElement("TD");
	td8_1.setAttribute('colspan', '2');
	const td8_2 = document.createElement("TD");
	td8_2.setAttribute('colspan', '2');
	const td8_3 = document.createElement("TD");
	const td8_4 = document.createElement("TD");

	const td9_1 = document.createElement("TD");
	td9_1.setAttribute('colspan', '2');
	const td9_2 = document.createElement("TD");
	td9_2.setAttribute('colspan', '2');
	const td9_3 = document.createElement("TD");
	const td9_4 = document.createElement("TD");
	const td9_5 = document.createElement("TD");
	td9_5.setAttribute('rowspan', '3');
	const td9_6 = document.createElement("TD");
	td9_6.setAttribute('colspan', '3');
	td9_6.setAttribute('rowspan', '3');

	const td10_1 = document.createElement("TD");
	td10_1.setAttribute('colspan', '2');
	const td10_2 = document.createElement("TD");
	td10_2.setAttribute('colspan', '2');
	const td10_3 = document.createElement("TD");
	const td10_4 = document.createElement("TD");

	const td11_1 = document.createElement("TD");
	td11_1.setAttribute('colspan', '2');
	const td11_2 = document.createElement("TD");
	td11_2.setAttribute('colspan', '2');
	const td11_3 = document.createElement("TD");
	const td11_4 = document.createElement("TD");

	// места ячеек
	row_1.append(td1_1, td1_2, td1_3, td1_4, td1_5, td1_6, td1_7);
	row_2.append(td2_1, td2_2, td2_3, td2_4, td2_5, td2_6);
	row_3.append(td3_1, td3_2, td3_3, td3_4, td3_5, td3_6, td3_7);
	row_4.append(td4_1, td4_2, td4_3, td4_4, td4_5, td4_6);
	row_5.append(td5_1, td5_2, td5_3, td5_4, td5_5, td5_6);
	row_6.append(td6_1, td6_2, td6_3, td6_4, td6_5, td6_6, td6_7, td6_8);
	row_7.append(td7_1, td7_2, td7_3, td7_4, td7_5, td7_6, td7_7);
	row_8.append(td8_1, td8_2, td8_3, td8_4);
	row_9.append(td9_1, td9_2, td9_3, td9_4, td9_5, td9_6);
	row_10.append(td10_1, td10_2, td10_3, td10_4);
	row_11.append(td11_1, td11_2, td11_3, td11_4);


	// Наполняем ячейки
	td1_7.innerHTML = `${project.cipher}-${subsection}-70-АУЭ`; //1.7

	td3_7.innerHTML = project.nameOfProject; //3.7

	td5_1.innerHTML = 'Изм.'; //5.1
	td5_2.innerHTML = 'Кол.Уч.'; //5.2
	td5_3.innerHTML = 'Лист'; //5.3
	td5_4.innerHTML = '№док.'; //5.4
	td5_5.innerHTML = 'Подпись'; //5.5
	td5_6.innerHTML = 'Дата'; //5.6

	td6_1.innerHTML = 'Утв.'; //6.1
	td6_2.innerHTML = project.nameOfBoss.split(' ')[0]; //6.2
	td6_3.innerHTML = ''; //6.3

	const d = new Date();
	// const day = d.getDate();
	const month = d.getMonth() + 1;
	const year = d.getFullYear().toString();

	let today;
	if (month < 10) {
		today = `0${month}.${year.split('')[2]}${year.split('')[3]}`
	} else {
		today = `${month}.${year.split('')[2]}${year.split('')[3]}`
	}

	td6_4.innerHTML = today;
	td9_4.innerHTML = today;
	td10_4.innerHTML = today;
	td11_4.innerHTML = today;

	
	if (typeOfPage === 'order' || typeOfPage === 'orderSheme') {
		td6_5.innerHTML = 'Задание заводу на изготовление шкафов АСКУЭ'; //6.5
	} else if (typeOfPage === 'works' || typeOfPage === 'worksSheme') {
		td6_5.innerHTML = 'Электрические сети 0,4-10 кВ. АСКУЭ'; //6.5
	}
	td6_6.innerHTML = 'Стадия'; //6.6
	td6_7.innerHTML = 'Лист'; //6.7
	td6_8.innerHTML = 'Листов'; //6.8

	td7_5.innerHTML = project.stageOfProject;			// 7.5

	if (typeOfPage === 'order') {
		td7_6.textContent = addOrderPageNumber(index, sem, mainObj);
	} else if (typeOfPage === 'orderSheme') {
		td7_6.textContent = addOrderShemePageNumber(index, shemePages);

		// исправить ниже, чтоб отличалась нумерация
	} else if (typeOfPage === 'works') {
		td7_6.textContent = addScopeOfWorksPageNumber(index, shemePages);
	} else if (typeOfPage === 'worksSheme') {
		td7_6.textContent = addShemeScopeOfWorksPageNumber(index);
	}
	
	td9_1.textContent = 'Н. контр.'; //9.1
	td9_2.textContent = 'Свирский';

	if (project.isBossSignature){
		const bossSignature = document.createElement("IMG");
		const bossSignature2 = document.createElement("IMG");
		bossSignature.classList.add('signature_boss');
		bossSignature2.classList.add('signature_boss2');
		bossSignature.setAttribute('src', './img/svirski3.png');
		bossSignature2.setAttribute('src', './img/svirski3.png');
		td9_3.append(bossSignature);
		td10_3.append(bossSignature2);
	}

	// console.log(project);

	if (typeOfPage === 'order') {
		td9_5.textContent = sem.fullDecription; //9.5
	} else if (typeOfPage === 'orderSheme' || typeOfPage === 'worksSheme') {
		if (sem.SEMType.split('-')[2] === '1' && sem.SEMType.split('-')[3] === '1') {
			td9_5.textContent = 'Щиток учета с однофазным вводом. Схема электрическая принципиальная'; //9.5
		} else if (sem.SEMType.split('-')[2] === '1' && sem.SEMType.split('-')[3] === '2') {
			td9_5.textContent = 'Щиток учета с двумя однофазными вводами. Схема электрическая принципиальная'; //9.5
		} else if (sem.SEMType.split('-')[2] === '2' && sem.SEMType.split('-')[3] === '1') {
			td9_5.textContent = 'Щиток учета с трехфазным вводом. Схема электрическая принципиальная'; //9.5
		} else if (sem.SEMType.split('-')[2] === '2' && sem.SEMType.split('-')[3] === '2') {
			td9_5.textContent = 'Щиток учета с двумя трехфазными вводами. Схема электрическая принципиальная'; //9.5
		} else if (sem.SEMType.split('-')[2] === '3' && sem.SEMType.split('-')[3] === '2') {
			td9_5.textContent = 'Щиток учета с трехфазным и однофазным вводом. Схема электрическая принципиальная'; //9.5
		}
	} else if (typeOfPage === 'works') {
		td9_5.textContent = `${sem.decriptionForWorks}. Ведомость объемов строительных и монтажных работ по установке`; //9.5
	} 


	const p_besp = document.createElement("P");
	p_besp.classList.add('p_besp');
	p_besp.setAttribute('display', 'inline-block');
	td9_6.append(p_besp);
	p_besp.innerHTML = 'РУП' + '<BR>' + '"Белэнергосетьпроект"';
	const logo_besp = document.createElement("IMG");
	logo_besp.classList.add('logo_besp');
	logo_besp.setAttribute('src', './img/logo_besp.jpg');
	td9_6.append(logo_besp);
	/*	td9_6.innerHTML = 'РУП "Белэнергосетьпроект"'; //9.6*/

	td10_1.innerHTML = 'Проверил'; //10.1
	td10_2.innerHTML = 'Свирский'; //10.2

	td11_1.innerHTML = 'Разраб.'; //11.1
	td11_2.innerHTML = project.nameOfDeveloper.split(' ')[0]; //11.2

	if (project.isDeveloperSignature){
		const developerSignature = document.createElement("IMG");
		developerSignature.classList.add('signature');
		if (project.nameOfDeveloper === "Крапивина Т. С") {
			developerSignature.setAttribute('src', './img/krapivina.png');
		} else if (project.nameOfDeveloper === "Свирский А. Е.") {
			developerSignature.setAttribute('src', './img/svirski3.png');
		} else if (project.nameOfDeveloper === "Идельчик Г. Р.") {
			developerSignature.setAttribute('src', './img/idelchik.png');
		} else {
			developerSignature.setAttribute('src', './img/svirski3.png');
		}
		td11_3.append(developerSignature);
	}

	return сipherTable;
}

export default addCipherTable;
