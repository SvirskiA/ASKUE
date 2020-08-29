let projectIndex = document.getElementById('project-index'); // шифр
let projectName = document.getElementById('project-name'); // название объекта
let projectStageC = document.getElementById('project-stage-c'); //стадия С
let projectStageA = document.getElementById('project-stage-a'); // стадия А
let projectStagePPD = document.getElementById('project-stage-ppd'); // стадия ППД
let gipName = document.getElementById('gip'); // ГИП
let bossName = document.getElementById('boss'); // начальник
let developerName = document.getElementById('developer'); // Разработчик

let textArea = document.getElementById('textarea'); // Поле ввода ЩУЭ

let projectData = JSON.parse(localStorage.getItem("projectData"));
console.log(gipName[0].value);

let userInput = localStorage.getItem("userInput");


let showSavedData = function () {
	projectIndex.value = projectData.cipher;
	projectName.value = projectData.nameOfProject;
	textArea.value = userInput;
	if (projectData.stageOfProject === "С") {
		projectStageC.setAttribute('checked', true);
		projectStageA.removeAttribute('checked');
		projectStagePPD.removeAttribute('checked');
	} else if (projectData.stageOfProject === "А") {
		projectStageC.removeAttribute('checked');
		projectStageA.setAttribute('checked', true);
		projectStagePPD.removeAttribute('checked');
	} else if (projectData.stageOfProject === "ППД") {
		projectStageC.removeAttribute('checked');
		projectStageA.removeAttribute('checked');
		projectStagePPD.setAttribute('checked', true);
	}

	for (let i = 0; i < gipName.length; i += 1) {
		if (projectData.nameOfGip === gipName[i].value) {
			gipName.options[i].selected = true;
		}
	}
	for (let i = 0; i < bossName.length; i += 1) {
		if (projectData.nameOfBoss === bossName[i].value) {
			bossName.options[i].selected = true;
		}
	}
	for (let i = 0; i < developerName.length; i += 1) {
		if (projectData.nameOfDeveloper === developerName[i].value) {
			developerName.options[i].selected = true;
		}
	}
}

export default showSavedData;
