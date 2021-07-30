import './layout/css/style.css';

import projectDataCollect from './layout/scripts/data/project-data-collect';
import showSavedData from './layout/scripts/data/show-saved-data';

// import mainObjectCollect from './layout/scripts/data/main-object-collect';

if (localStorage.getItem("projectData") != null) {
    showSavedData();
}

if (localStorage.getItem('userOrderPageInput')) {
    const userOrderPageInput = document.getElementById('input_page');
    userOrderPageInput.value = localStorage.getItem('userOrderPageInput');
}

if (localStorage.getItem('userWorksPageInput')) {
    const userWorksPageInput = document.getElementById('input_page_works');
    userWorksPageInput.value = localStorage.getItem('userWorksPageInput');
}

let saveData = () => {
    const userInput = document.getElementById('textarea').value;
    localStorage.setItem("userInput", userInput);

    let projectData = JSON.stringify(projectDataCollect());
    localStorage.setItem("projectData", projectData);

    const userOrderPageInput = document.getElementById('input_page').value;
    localStorage.setItem("userOrderPageInput", userOrderPageInput);

    const userWorksPageInput = document.getElementById('input_page_works').value;
    localStorage.setItem("userWorksPageInput", userWorksPageInput);
}

// HELP
const helpButton = document.getElementById('help');
helpButton.onclick = function(e) {
    e.preventDefault();

    saveData();

    location.href = 'help.html';
}

// Опросные
const orderListsSubmitButton = document.getElementById('submit-order');
orderListsSubmitButton.onclick = function(e) {
    e.preventDefault();

    saveData();

    location.href = 'order-list.html';
}

// Схемы к опросным
const shemeBtn = document.getElementById('submit-order-shemes');
shemeBtn.onclick = function(e) {
    e.preventDefault();

    saveData();

    location.href = 'sсheme_order_sheet.html';
}

// Ведомости работ
const worksSubmitButton = document.getElementById('submit-works');
worksSubmitButton.onclick = function(e) {
    e.preventDefault();

    saveData();

    location.href = 'scopeOfWork.html';
}

// Схемы к -103 части
const shemeMainBtn = document.getElementById('submit-works-shemes');
shemeMainBtn.onclick = function(e) {
    e.preventDefault();

    saveData();

    location.href = 'sсheme_works.html';
}

// Объемы в ОСиОС
const estimateBtn = document.getElementById('submit-estimate');
estimateBtn.onclick = function(e) {
    e.preventDefault();

    saveData();

    location.href = 'estimate.html';
}