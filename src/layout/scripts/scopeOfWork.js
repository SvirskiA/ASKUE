/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
import '../css/scopeOfWork.css';

import mainObjectCollect from './data/main-object-collect';
import createInfoTable from './table-for-order_n_works/create-info-table';
import addCipherTable from './cipher/add-cipher-table';
import addAsideTable from './cipher/add-aside-table';
import addFormat from './cipher/add-format';
import addSumSem from './for-order-list/add-sum-sem';

import workTable from './for-works/works';

let userInput = localStorage.getItem('userInput');
userInput = mainObjectCollect(userInput);
console.log(userInput, '- userInput');

const userInputWithoutSameBreakers = [];
// удаление щитков с одинаковыми номиналами автоматов
for (let i = 0; i < userInput.length; i += 1) {
  if (i === 0) {
    userInputWithoutSameBreakers.push(userInput[i]);
  } else if (userInput[i].SEMType !== userInput[i - 1].SEMType
		|| userInput[i].inputFromSem !== userInput[i - 1].inputFromSem
		|| userInput[i].pillarType !== userInput[i - 1].pillarType) {
    userInputWithoutSameBreakers.push(userInput[i]);
    // console.log(userInput[i].SEMType, ' - добавляем');
  } else {
    // тут меняется количество щитков путем прибавления тех которые пропустили к таким же
    userInput[i - 1].countOfSEM = userInput[i - 1].countOfSEM + userInput[i].countOfSEM;
  }
}
console.log(userInputWithoutSameBreakers, '- userInputWithoutSameBreakers');

// узнать кол-во схем, для нумерации
const shemePages = [];
for (let i = 0; i < userInput.length; i += 1) {
  console.log(i);
  if (i === 0) {
    shemePages.push(i);
  } else if (userInput[i].SEMType.split('-')[2] !== userInput[i - 1].SEMType.split('-')[2]
		|| userInput[i].SEMType.split('-')[3] !== userInput[i - 1].SEMType.split('-')[3]) {
    shemePages.push(i);
  }
}

const projectData = JSON.parse(localStorage.getItem('projectData'));
console.log(projectData);

// let getScopeOfWorkButton = document.getElementById('get-scope-of-work');

// getScopeOfWorkButton.onclick = function (e) {
// 	e.preventDefault();

const countersAndBreakersWrapper = document.getElementById('counters_n_breakers_container');
countersAndBreakersWrapper.classList.add('hide_counters_n_breakers_container');

for (let i = 0; i < userInputWithoutSameBreakers.length; i += 1) {
  // add main table
  const infoTableWrapper = document.getElementById('info_table_wrapper');
  infoTableWrapper.classList.add('show_info_table_wrapper');
  const infoTable = document.querySelector('.info_table_body');
  const rowForInfoTable = createInfoTable(userInputWithoutSameBreakers[i], false);
  infoTable.append(rowForInfoTable);

  // add wrapper
  const orderWrapper = document.getElementById('order_sheet');

  const h6_break = document.createElement('H6');
  h6_break.classList.add('h6_break');

  const a4div = document.createElement('DIV');
  a4div.classList.add('a4_div');

  const a4div_frame = document.createElement('DIV');
  a4div_frame.classList.add('a4_div_frame');

  orderWrapper.append(h6_break, a4div);
  a4div.append(a4div_frame);

  // add cipher in wrapper
  a4div_frame.append(addCipherTable(projectData, '103', 'works', userInputWithoutSameBreakers[i], i, userInput, shemePages));
  // add aside frame in wrapper
  a4div_frame.append(addAsideTable());

  a4div_frame.append(workTable(userInputWithoutSameBreakers[i]));

  a4div.append(addFormat('A4'));
}
addSumSem(userInputWithoutSameBreakers);
// }
