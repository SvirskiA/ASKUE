import '../css/order-list.css';

import mainObjectCollect from './data/main-object-collect';
import addBreakersChoise from './for-order-list/add-breakers-choise';
import createInfoTable from './for-order-list/create-info-table';
import contactsTable from './for-order-list/contacts-table';
import createLegendOfOrderList from './for-order-list/legend-of-order-list';
import createOrderTable from './for-order-list/create-order-table';
import fillOrderTable from './for-order-list/fill-order-table';
import addCipherTable from './cipher/add-cipher-table';
import addAsideTable from './cipher/add-aside-table';
import addSumSem from './for-order-list/add-sum-sem';

let userInput = localStorage.getItem("userInput");
userInput = mainObjectCollect(userInput);
console.log(userInput);

let projectData = JSON.parse(localStorage.getItem("projectData"));

console.log(projectData);

let arrCounterBreakers = [];

for (let elem of userInput) {
  if (arrCounterBreakers.indexOf(elem.outBreaker1) === -1) {
    arrCounterBreakers.push(elem.outBreaker1);
  }

  if (elem.outBreaker2 !== null
    && arrCounterBreakers.indexOf(elem.outBreaker2) === -1) {
    console.log(arrCounterBreakers.indexOf(elem.outBreaker2), elem.outBreaker2)
    arrCounterBreakers.push(elem.outBreaker2)
  }
}

arrCounterBreakers.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

console.log(arrCounterBreakers);
addBreakersChoise(arrCounterBreakers);

let getOrderListsButton = document.getElementById('get-order-lists');

getOrderListsButton.onclick = function (e) {
  e.preventDefault();

  const breakersWrapper = document.getElementById('counters-input');
  breakersWrapper.classList.add('hidden');

  for (let i = 0; i < userInput.length; i += 1) {
    const countersAndBreakersWrapper = document.getElementById('counters_n_breakers_container');
    countersAndBreakersWrapper.classList.add('hide_counters_n_breakers_container');

    // add main table
    const infoTableWrapper = document.getElementById('info_table_wrapper');
    infoTableWrapper.classList.add('show_info_table_wrapper');
    const infoTable = document.querySelector('.info_table_body');
    const rowForInfoTable = createInfoTable(userInput[i])
    infoTable.append(rowForInfoTable);

    // add wrapper
    const orderWrapper = document.getElementById('order_sheet');

    const h6_break = document.createElement("H6");
    h6_break.classList.add('h6_break');

    const a4div = document.createElement("DIV");
    a4div.classList.add('a4_div');

    const a4div_frame = document.createElement("DIV");
    a4div_frame.classList.add('a4_div_frame');

    orderWrapper.append(h6_break, a4div);
    a4div.append(a4div_frame);

    // add Legend in wrapper
    a4div_frame.append(createLegendOfOrderList());

    // add description table in wrapper
    a4div_frame.append(contactsTable(userInput[i], projectData));

    // add order table in wrapper
    a4div_frame.append(createOrderTable(i));
    // add note in wrapper
    const note = document.createElement("P");
	  note.classList.add('note');
	  a4div_frame.append(note);
    note.textContent = 'Дополнение: Щиток выносного учета должен соответствовать требованиям СТП 33243.20.262-17.';
    
    // add cipher in wrapper
    a4div_frame.append(addCipherTable(projectData, userInput[i], i, userInput));
    // add aside frame in wrapper
    a4div_frame.append(addAsideTable());
  }
  for (let i = 0; i < userInput.length; i += 1) {
    fillOrderTable(userInput[i], i, arrCounterBreakers);
  }

  // add counters sum
  addSumSem(userInput);

  
}
