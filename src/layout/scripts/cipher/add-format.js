function addFormat(format) {

	const format_div = document.createElement("DIV");
	format_div.classList.add('format_div');

	const formatPara = document.createElement("P");
	formatPara.classList.add('format');
	
	formatPara.textContent = `Формат ${format}`;
	format_div.append(formatPara);

	return format_div;
}

export default addFormat;
