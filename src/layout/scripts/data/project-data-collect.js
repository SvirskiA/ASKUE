let projectIndex = document.getElementById('project-index'); // шифр
let projectName = document.getElementById('project-name'); // название объекта
let projectStageC = document.getElementById('project-stage-c'); //стадия С
let projectStageA = document.getElementById('project-stage-a'); // стадия А
let projectStagePPD = document.getElementById('project-stage-ppd'); // стадия ППД
let gipName = document.getElementById('gip'); // ГИП
let bossName = document.getElementById('boss'); // начальник
let developerName = document.getElementById('developer'); // Разработчик
let developerSignature = document.getElementById('developer_signature'); // Разработчик
let bossSignature = document.getElementById('boss_signature'); // Разработчик

function projectDataCollect() {

	let stage;
	if (projectStageC.checked) {
		stage = 'С';
	} else if (projectStageA.checked) {
		stage = 'А';
	} else if (projectStagePPD.checked) {
		stage = 'ППД';
	}

	let projectData = {
		cipher: projectIndex.value,
		nameOfProject: projectName.value,
		stageOfProject: stage,
		nameOfGip: gipName.value,
		nameOfBoss: bossName.value,
		nameOfDeveloper: developerName.value,
		isDeveloperSignature: developerSignature.checked,
		isBossSignature: bossSignature.checked,
	}
	console.log(projectData);
	return projectData;
}

export default projectDataCollect;
