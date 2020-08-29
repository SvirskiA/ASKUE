function addAsideTable() {

	var aside_frame = document.createElement("TABLE");
	aside_frame.classList.add('aside_frame');

	var body = document.createElement("TBODY");
	aside_frame.appendChild(body);

	var row1 = document.createElement("TR");
	var row2 = document.createElement("TR");
	var row3 = document.createElement("TR");

	body.append(row1, row2, row3);

	var td1_1 = document.createElement("TD");
	var span_td1_1 = document.createElement("SPAN");
	var td1_2 = document.createElement("TD");
	var td2_1 = document.createElement("TD");
	var span_td2_1 = document.createElement("SPAN");
	var td2_2 = document.createElement("TD");
	var td3_1 = document.createElement("TD");
	var span_td3_1 = document.createElement("SPAN");
	var td3_2 = document.createElement("TD");

	// места ячеек
	row1.append(td1_1, td1_2);
	row2.append(td2_1, td2_2);
	row3.append(td3_1, td3_2);

	// Наполняем спаны
	td1_1.append(span_td1_1);
	td2_1.append(span_td2_1);
	td3_1.append(span_td3_1);

	// Наполняем ячейки
	span_td1_1.innerHTML = 'Инв. N подл.';
	td1_2.innerHTML = '';
	span_td2_1.innerHTML = 'Подпись и дата';
	td2_2.innerHTML = '';
	span_td3_1.innerHTML = 'Взамен инв. N';
	td3_2.innerHTML = '';

	return aside_frame;
}

export default addAsideTable;
