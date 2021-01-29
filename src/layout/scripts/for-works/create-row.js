let createRow = function(description, measure, value) {
// let createRow = function(description, measure, value, forLongDescription) {


    const row = document.createElement("TR");
    // ячейки
    const td1 = document.createElement("TD");
    const td2 = document.createElement("TD");
    const td3 = document.createElement("TD");

    td1.textContent = description;
    td2.innerHTML = measure;
    td3.textContent = value;

    row.append(td1, td2, td3);

    // if (forLongDescription) {
    //     const row2 = document.createElement("TR");

    //     const td1_2 = document.createElement("TD");
    //     const td2_2 = document.createElement("TD");
    //     const td3_2 = document.createElement("TD");

    //     td1_2.textContent = forLongDescription;
    //     row2.append(td1_2, td2_2, td3_2);
    // }

    return row;
}

export default createRow;
