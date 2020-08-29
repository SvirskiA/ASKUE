function createLegendOfOrderList() {
	const legend = document.createElement("LEGEND");
	legend.classList.add('legend_table');

	legend.innerHTML = 'ОПРОСНЫЙ ЛИСТ <br> на изготовление <br> щитка учета электроэнергии выносного типа';

	return legend;
}

export default createLegendOfOrderList;
