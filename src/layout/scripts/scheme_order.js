import '../css/style_scheme_order.css';

import mainObjectCollect from './data/main-object-collect';
import addCipherTable from './cipher/add-cipher-table';
import addAsideTable from './cipher/add-aside-table';
import addFormat from './cipher/add-format';

let userInput = localStorage.getItem("userInput");
userInput = mainObjectCollect(userInput);

let projectData = JSON.parse(localStorage.getItem("projectData"));

let uniqueSems = [];
let shemePages = [];

for (let i = 0; i < userInput.length; i += 1) {
	console.log(i)
	if (i === 0) {
		uniqueSems.push(userInput[i]);
		shemePages.push(i);
	} else if (userInput[i].SEMType.split('-')[2] !== userInput[i - 1].SEMType.split('-')[2]
		|| userInput[i].SEMType.split('-')[3] !== userInput[i - 1].SEMType.split('-')[3]) {
		uniqueSems.push(userInput[i]);
		shemePages.push(i);
	}
}

for (let i = 0; i < uniqueSems.length; i += 1) {
	const schemeWrapper = document.getElementById('scheme_wrapper');

	const h6_break = document.createElement("H6");
	h6_break.classList.add('h6_break');
	
	const a3div = document.createElement("DIV");
	a3div.classList.add('a3_div');

	schemeWrapper.append(h6_break, a3div);

	const a3div_frame = document.createElement("DIV");
	a3div_frame.classList.add('a3_div_frame');
	a3div.append(a3div_frame);
	if (uniqueSems[i].SEMType.split('-')[2] === '1' && uniqueSems[i].SEMType.split('-')[3] === '1') {
		a3div_frame.classList.add('sem1_1');
	} else if (uniqueSems[i].SEMType.split('-')[2] === '2' && uniqueSems[i].SEMType.split('-')[3] === '1') {
		a3div_frame.classList.add('sem2_1');
	} else if (uniqueSems[i].SEMType.split('-')[2] === '1' && uniqueSems[i].SEMType.split('-')[3] === '2') {
		a3div_frame.classList.add('sem1_2');
	} else if (uniqueSems[i].SEMType.split('-')[2] === '2' && uniqueSems[i].SEMType.split('-')[3] === '2') {
		a3div_frame.classList.add('sem2_2');
	} else if (uniqueSems[i].SEMType.split('-')[2] === '3' && uniqueSems[i].SEMType.split('-')[3] === '2') {
		a3div_frame.classList.add('sem3_2');
	}

	const note = document.createElement("P");
	note.classList.add('note');
	a3div_frame.appendChild(note);
	note.innerHTML = 'Примечания: <br>1. * Тип (рубильник, автоматический выключатель или выключатель нагрузки) и марку вводных аппаратов принять согласно опросным листам. <br> 2. Марки указанного на чертеже оборудования принять согласно опросным листам.';
	// add cipher in wrapper
	a3div_frame.append(addCipherTable(projectData, '290', 'orderSheme', uniqueSems[i], i, userInput, shemePages));
	// add aside frame in wrapper
	a3div_frame.append(addAsideTable());

	a3div.append(addFormat('A3'));
}
