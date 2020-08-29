import './layout/css/style.css';

import projectDataCollect from './layout/scripts/data/project-data-collect';
import showSavedData from './layout/scripts/data/show-saved-data';


import mainObjectCollect from './layout/scripts/data/main-object-collect';


const orderListsSubmitButton = document.querySelector('#submit-order');

if (localStorage.getItem("projectData") != null) {
    showSavedData();
}


orderListsSubmitButton.onclick = function(e) {
    e.preventDefault();

    console.log('+');

    const userInput = document.getElementById('textarea').value;
    localStorage.setItem("userInput", userInput);

    // let mainArray = mainObjectCollect();
    // localStorage.setItem("mainArray", mainArray);

    let projectData = JSON.stringify(projectDataCollect());
    localStorage.setItem("projectData", projectData);
    // console.log()
    // location.href = 'order_sheet.html';
    location.href = 'order-list.html';
    // window.open('category.html', '_blank');
}

const worksSubmitButton = document.getElementById('submit-works');

worksSubmitButton.onclick = function(e) {
    e.preventDefault();

    console.log('+')
    // let mainArray = mainObjectCollect();
    // localStorage.setItem("mainArray", mainArray);

    // let projectData = projectDataCollect();
    // localStorage.setItem("projectData", projectData);
    let projectData = localStorage.getItem("projectData");
    console.log(projectData);




    

    // let mainArray = [];

    // for (let i = 0; i < mainJSON.length; i += 1) {
    //     mainArray.push(JSON.parse(mainJSON[i]));
    // }
    // console.log(mainArray)
}