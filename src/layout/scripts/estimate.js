import '../css/estimate.css';
import createRow from './for-works/create-row';

import mainObjectCollect from './data/main-object-collect';

import worksDataCollect from './for-works/works-data';

let routing_4x16_cable_along_pylon_with_clamps_XK1 = 0;
let routing_4x16_cable_along_pylon_with_protection_cover_KM = 0;
let routing_4x16_cable_in_the_trench = 0; //  в траншее
let routing_4x16_cable_along_remote_stand = 0; // по выносной стойке
let purchase_4x16_cable_with_2_percent = 0;

let routing_2x16_cable_along_pylon_with_clamps_XK1 = 0;
let routing_2x16_cable_along_pylon_with_protection_cover_KM = 0;
let routing_2x16_cable_in_the_trench = 0; //  в траншее
let routing_2x16_cable_along_remote_stand = 0; // по выносной стойке
let purchase_2x16_cable_with_2_percent = 0;

let finding_an_existing_cable; // отшурфовка сущ кабеля

let routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 0;
let routing_existing_4x16_cable_in_the_finished_trench = 0;
let routing_existing_4x16_cable_along_remote_stand = 0;
let routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 0;
let routing_existing_2x16_cable_in_the_finished_trench = 0;
let routing_existing_2x16_cable_along_remote_stand = 0;

let wire_routing_along_constructions = 0;
let wire_routing_in_the_pipe = 0; // в трубе
let purchase_wire_with_2_percent = 0;

let purchase_n_montage_INside_sleeve_4 = 0; // муфта внутренней установки 4...
let purchase_n_montage_OUTside_sleeve_4 = 0;
let purchase_n_montage_INside_sleeve_2 = 0;
let purchase_n_montage_OUTside_sleeve_2 = 0; // муфта наружной установки 2...

let purchase_n_montage_clamp_ZOP = 0; // зажим ЗОПг-2

let purchase_n_montage_strip_2400_for_grounding = 0; // полоса для подключения к выпуску опоры
let purchase_n_montage_protection_cover_KM_1700 = 0; // кожух защиты кабеля КМ 1700
let purchase_n_montage_protection_cover_KM_2300 = 0; // кожух защиты кабеля КМ 2300
let purchase_n_montage_strip_2200_for_grounding = 0; // полоса для подключения к болту корпуса ЩУЭ
let purchase_n_montage_round_steel_for_strip = 0; // сталь круглая
let purchase_n_montage_clamp_XK1 = 0; // хомут ХК-1

let digging_trenches = 0; // рытье траншеи
let ground_underlay = 0; // устройство постели из земли
let backfill = 0; // засыпка грунтом
let excavation = 0; // разработка котлована под стойку
let soil_leveling = 0; // разравнивание грунта
let purchase_crushed_stone_sand_gravel_mixture = 0; // щебеночно-песчано-гравийная смесь
let purchase_concrete = 0; // бетон
let installation_of_metal_structures_in_concrete = 0; // установка металлоконструкций в бетоне

let dismantling_cable_from_pylon = 0; // демонтаж сущ кабеля
let dismantling_metal_corner_from_pylon = 0; // демонтаж сущ уголка
let dismantling_metal_construction_from_pylon = 0; // демонтаж сущ металлоконструкций
let dismantling_clamp_ZOP = 0; // демонтаж зажимов ЗОПг-2
let dismantling_INside_sleeve_4 = 0; // демонтаж муфты наружной установки 4..
let dismantling_INside_sleeve_2 = 0; // демонтаж муфты наружной установки 2..



let userInput = localStorage.getItem("userInput");
userInput = mainObjectCollect(userInput);
console.log(userInput, '- userInput');



let projectData = JSON.parse(localStorage.getItem("projectData"));
console.log(projectData);


for (let i = 0; i < userInput.length; i += 1) {
    // console.log(worksDataCollect(userInput[i]).routing_4x16_cable_along_pylon_with_clamps_XK1);
    routing_4x16_cable_along_pylon_with_clamps_XK1 += worksDataCollect(userInput[i]).routing_4x16_cable_along_pylon_with_clamps_XK1 * userInput[i].countOfSEM;
    routing_4x16_cable_along_pylon_with_protection_cover_KM += worksDataCollect(userInput[i]).routing_4x16_cable_along_pylon_with_protection_cover_KM * userInput[i].countOfSEM;
    routing_4x16_cable_in_the_trench += worksDataCollect(userInput[i]).routing_4x16_cable_in_the_trench * userInput[i].countOfSEM;
    routing_4x16_cable_along_remote_stand += worksDataCollect(userInput[i]).routing_4x16_cable_along_remote_stand * userInput[i].countOfSEM;
    purchase_4x16_cable_with_2_percent += worksDataCollect(userInput[i]).purchase_4x16_cable_with_2_percent * userInput[i].countOfSEM;

    routing_2x16_cable_along_pylon_with_clamps_XK1 += worksDataCollect(userInput[i]).routing_2x16_cable_along_pylon_with_clamps_XK1 * userInput[i].countOfSEM;
    routing_2x16_cable_along_pylon_with_protection_cover_KM += worksDataCollect(userInput[i]).routing_2x16_cable_along_pylon_with_protection_cover_KM * userInput[i].countOfSEM;
    routing_2x16_cable_in_the_trench += worksDataCollect(userInput[i]).routing_2x16_cable_in_the_trench * userInput[i].countOfSEM;
    routing_2x16_cable_along_remote_stand += worksDataCollect(userInput[i]).routing_2x16_cable_along_remote_stand * userInput[i].countOfSEM;
    purchase_2x16_cable_with_2_percent += worksDataCollect(userInput[i]).purchase_2x16_cable_with_2_percent * userInput[i].countOfSEM;

    finding_an_existing_cable += worksDataCollect(userInput[i]).finding_an_existing_cable * userInput[i].countOfSEM;

    routing_existing_4x16_cable_along_pylon_with_protection_cover_KM += worksDataCollect(userInput[i]).routing_existing_4x16_cable_along_pylon_with_protection_cover_KM * userInput[i].countOfSEM;
    routing_existing_4x16_cable_in_the_finished_trench += worksDataCollect(userInput[i]).routing_existing_4x16_cable_in_the_finished_trench * userInput[i].countOfSEM;
    routing_existing_4x16_cable_along_remote_stand += worksDataCollect(userInput[i]).routing_existing_4x16_cable_along_remote_stand * userInput[i].countOfSEM;
    routing_existing_2x16_cable_along_pylon_with_protection_cover_KM += worksDataCollect(userInput[i]).routing_existing_2x16_cable_along_pylon_with_protection_cover_KM * userInput[i].countOfSEM;
    routing_existing_2x16_cable_in_the_finished_trench += worksDataCollect(userInput[i]).routing_existing_2x16_cable_in_the_finished_trench * userInput[i].countOfSEM;
    routing_existing_2x16_cable_along_remote_stand += worksDataCollect(userInput[i]).routing_existing_2x16_cable_along_remote_stand * userInput[i].countOfSEM;

    wire_routing_along_constructions += worksDataCollect(userInput[i]).wire_routing_along_constructions * userInput[i].countOfSEM;
    wire_routing_in_the_pipe += worksDataCollect(userInput[i]).wire_routing_in_the_pipe * userInput[i].countOfSEM;
    purchase_wire_with_2_percent += worksDataCollect(userInput[i]).purchase_wire_with_2_percent * userInput[i].countOfSEM;

    purchase_n_montage_INside_sleeve_4 += worksDataCollect(userInput[i]).purchase_n_montage_INside_sleeve_4 * userInput[i].countOfSEM;
    purchase_n_montage_OUTside_sleeve_4 += worksDataCollect(userInput[i]).purchase_n_montage_OUTside_sleeve_4 * userInput[i].countOfSEM;
    purchase_n_montage_INside_sleeve_2 += worksDataCollect(userInput[i]).purchase_n_montage_INside_sleeve_2 * userInput[i].countOfSEM;
    purchase_n_montage_OUTside_sleeve_2 += worksDataCollect(userInput[i]).purchase_n_montage_OUTside_sleeve_2 * userInput[i].countOfSEM;

    purchase_n_montage_clamp_ZOP += worksDataCollect(userInput[i]).purchase_n_montage_clamp_ZOP * userInput[i].countOfSEM;

    purchase_n_montage_strip_2400_for_grounding += worksDataCollect(userInput[i]).purchase_n_montage_strip_2400_for_grounding * userInput[i].countOfSEM;
    purchase_n_montage_protection_cover_KM_1700 += worksDataCollect(userInput[i]).purchase_n_montage_protection_cover_KM_1700 * userInput[i].countOfSEM;
    purchase_n_montage_protection_cover_KM_2300 += worksDataCollect(userInput[i]).purchase_n_montage_protection_cover_KM_2300 * userInput[i].countOfSEM;
    purchase_n_montage_strip_2200_for_grounding += worksDataCollect(userInput[i]).purchase_n_montage_strip_2200_for_grounding * userInput[i].countOfSEM;
    purchase_n_montage_round_steel_for_strip += worksDataCollect(userInput[i]).purchase_n_montage_round_steel_for_strip * userInput[i].countOfSEM;
    purchase_n_montage_clamp_XK1 += worksDataCollect(userInput[i]).purchase_n_montage_clamp_XK1 * userInput[i].countOfSEM;

    digging_trenches += worksDataCollect(userInput[i]).digging_trenches * userInput[i].countOfSEM;
    ground_underlay += worksDataCollect(userInput[i]).ground_underlay * userInput[i].countOfSEM;
    backfill += worksDataCollect(userInput[i]).backfill * userInput[i].countOfSEM;
    excavation += worksDataCollect(userInput[i]).excavation * userInput[i].countOfSEM;
    soil_leveling += worksDataCollect(userInput[i]).soil_leveling * userInput[i].countOfSEM;
    purchase_crushed_stone_sand_gravel_mixture += worksDataCollect(userInput[i]).purchase_crushed_stone_sand_gravel_mixture * userInput[i].countOfSEM;
    purchase_concrete += worksDataCollect(userInput[i]).purchase_concrete * userInput[i].countOfSEM;
    installation_of_metal_structures_in_concrete += worksDataCollect(userInput[i]).installation_of_metal_structures_in_concrete * userInput[i].countOfSEM;

    dismantling_cable_from_pylon += worksDataCollect(userInput[i]).dismantling_cable_from_pylon * userInput[i].countOfSEM;
    dismantling_metal_corner_from_pylon += worksDataCollect(userInput[i]).dismantling_metal_corner_from_pylon * userInput[i].countOfSEM;
    dismantling_metal_construction_from_pylon += worksDataCollect(userInput[i]).dismantling_metal_construction_from_pylon * userInput[i].countOfSEM;
    dismantling_clamp_ZOP += worksDataCollect(userInput[i]).dismantling_clamp_ZOP * userInput[i].countOfSEM;
    dismantling_INside_sleeve_4 += worksDataCollect(userInput[i]).dismantling_INside_sleeve_4 * userInput[i].countOfSEM;
    dismantling_INside_sleeve_2 += worksDataCollect(userInput[i]).dismantling_INside_sleeve_2 * userInput[i].countOfSEM;

    console.log(worksDataCollect(userInput[i]))
}


const a4div = document.createElement("DIV");
a4div.classList.add('a4_div');

const a4div_frame = document.createElement("DIV");
a4div_frame.classList.add('a4_div_frame');

const orderWrapper = document.getElementById('estimate-table');
orderWrapper.append(a4div);
a4div.append(a4div_frame);



let table = document.createElement("TABLE");
table.classList.add('works_table');

let bodyOfWorkTable = document.createElement("TBODY");
table.append(bodyOfWorkTable);

// ЛЕГЕНДА ТАБЛИЦЫ
// строки
let row1OfWorkTable = document.createElement("TR");
bodyOfWorkTable.append(row1OfWorkTable);
// ячейки
let td1_1OfWorkTable = document.createElement("TD");
let td1_2OfWorkTable = document.createElement("TD");
let td1_3OfWorkTable = document.createElement("TD");
// места ячеек
row1OfWorkTable.append(td1_1OfWorkTable, td1_2OfWorkTable, td1_3OfWorkTable);
// Наполняем ячейки
td1_1OfWorkTable.textContent = 'Наименование работ';
td1_2OfWorkTable.textContent = 'Ед.изм.';
td1_3OfWorkTable.textContent = 'Количество';

// let collectedDataFromSem = worksDataCollect(sem);

// console.log(collectedDataFromSem);


a4div_frame.append(table);


if (routing_4x16_cable_along_pylon_with_clamps_XK1) {
    table.append(createRow('Прокладка кабеля АВБбШВ 4х16 по опоре (с креплением хомутами ХК-1)', 'м',
        routing_4x16_cable_along_pylon_with_clamps_XK1.toFixed(2)));
}
if (routing_4x16_cable_along_pylon_with_protection_cover_KM) {
    table.append(createRow('Прокладка кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=2300)', 'м',
        routing_4x16_cable_along_pylon_with_protection_cover_KM.toFixed(2)));
}
if (routing_4x16_cable_in_the_trench) {
    table.append(createRow('Прокладка кабеля АВБбШВ 4х16 в готовой траншее', 'м',
        routing_4x16_cable_in_the_trench.toFixed(2)));
}
if (routing_4x16_cable_along_remote_stand) {
    table.append(createRow('Прокладка кабеля АВБбШВ 4х16 по выносной стойке', 'м',
        routing_4x16_cable_along_remote_stand.toFixed(2)));
}
if (purchase_4x16_cable_with_2_percent) {
    table.append(createRow('Приобретение кабеля АВБбШВ 4х16 всего с надбавкой 2%', 'м',
        purchase_4x16_cable_with_2_percent.toFixed(2)));
}
if (routing_2x16_cable_along_pylon_with_clamps_XK1) {
    table.append(createRow('Прокладка кабеля АВБбШВ 2х16 по опоре (с креплением хомутами ХК-1)', 'м',
        routing_2x16_cable_along_pylon_with_clamps_XK1.toFixed(2)));
}
if (routing_2x16_cable_along_pylon_with_protection_cover_KM) {
    table.append(createRow('Прокладка кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=2300)', 'м',
        routing_2x16_cable_along_pylon_with_protection_cover_KM.toFixed(2)));
}
if (routing_2x16_cable_in_the_trench) {
    table.append(createRow('Прокладка кабеля АВБбШВ 2х16 в готовой траншее', 'м',
        routing_2x16_cable_in_the_trench.toFixed(2)));
}
if (routing_2x16_cable_along_remote_stand) {
    table.append(createRow('Прокладка кабеля АВБбШВ 2х16 по выносной стойке', 'м',
        routing_2x16_cable_along_remote_stand.toFixed(2)));
}
if (purchase_2x16_cable_with_2_percent) {
    table.append(createRow('Приобретение кабеля АВБбШВ 2х16 всего с надбавкой 2%', 'м',
        purchase_2x16_cable_with_2_percent.toFixed(2)));
}
if (finding_an_existing_cable) {
    table.append(createRow('Отшурфовка существующего кабеля', 'м' + '<sup>3</sup>',
        finding_an_existing_cable.toFixed(2)));
}
if (routing_existing_4x16_cable_along_pylon_with_protection_cover_KM) {
    table.append(createRow('Прокладка существующего кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=1700)', 'м',
        routing_existing_4x16_cable_along_pylon_with_protection_cover_KM.toFixed(2)));
}
if (routing_existing_4x16_cable_in_the_finished_trench) {
    table.append(createRow('Прокладка существующего кабеля АВБбШВ 4х16 в готовой траншее', 'м',
        routing_existing_4x16_cable_in_the_finished_trench.toFixed(2)));
}
if (routing_existing_4x16_cable_along_remote_stand) {
    table.append(createRow('Прокладка существующего кабеля АВБбШВ 4х16 по выносной стойке', 'м',
        routing_existing_4x16_cable_along_remote_stand.toFixed(2)));
}
if (routing_existing_2x16_cable_along_pylon_with_protection_cover_KM) {
    table.append(createRow('Прокладка существующего кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=1700)', 'м',
        routing_existing_2x16_cable_along_pylon_with_protection_cover_KM.toFixed(2)));
}
if (routing_existing_2x16_cable_in_the_finished_trench) {
    table.append(createRow('Прокладка существующего кабеля АВБбШВ 2х16 в готовой траншее', 'м',
        routing_existing_2x16_cable_in_the_finished_trench.toFixed(2)));
}
if (routing_existing_2x16_cable_along_remote_stand) {
    table.append(createRow('Прокладка существующего кабеля АВБбШВ 2х16 по выносной стойке', 'м',
        routing_existing_2x16_cable_along_remote_stand.toFixed(2)));
}
if (wire_routing_along_constructions) {
    table.append(createRow('Прокладка провода СИП-4и 2х16 по конструкциям', 'м',
        wire_routing_along_constructions.toFixed(2)));
}
if (wire_routing_in_the_pipe) {
    table.append(createRow('Прокладка провода СИП-4и 2х16 в трубе', 'м',
        wire_routing_in_the_pipe.toFixed(2)));
}
if (purchase_wire_with_2_percent) {
    table.append(createRow('Приобретение провода СИП-4и 2х16 с надбавкой 2%', 'м',
        purchase_wire_with_2_percent.toFixed(2)));
}
if (purchase_n_montage_INside_sleeve_4) {
    table.append(createRow('Приобретение и монтаж муфт внутренней установки типа 4ПБКВттп (16-25)-1', 'шт.',
        purchase_n_montage_INside_sleeve_4.toFixed(2)));
}
if (purchase_n_montage_OUTside_sleeve_4) {
    table.append(createRow('Приобретение и монтаж муфт наружной установки типа 4ПБКНттп (16-25)-1', 'шт.',
        purchase_n_montage_OUTside_sleeve_4.toFixed(2)));
}
if (purchase_n_montage_INside_sleeve_2) {
    table.append(createRow('Приобретение и монтаж муфт внутренней установки типа 2ПБКВттп (16-25)-1', 'шт.',
        purchase_n_montage_INside_sleeve_2.toFixed(2)));
}
if (purchase_n_montage_OUTside_sleeve_2) {
    table.append(createRow('Приобретение и монтаж муфт наружной установки типа 2ПБКНттп (16-25)-1', 'шт.',
        purchase_n_montage_OUTside_sleeve_2.toFixed(2)));
}
if (purchase_n_montage_clamp_ZOP) {
    table.append(createRow('Приобретение и монтаж зажимов ЗОПг-2', 'шт.',
        purchase_n_montage_clamp_ZOP.toFixed(2)));
}
if (purchase_n_montage_strip_2400_for_grounding) {
    table.append(createRow('Приобретение и монтаж полосы 4х12, L=2400 для подключения к заземляющему выпуску опоры', 'шт.',
        purchase_n_montage_strip_2400_for_grounding.toFixed(2)));
}
if (purchase_n_montage_protection_cover_KM_1700) {
    table.append(createRow('Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=1700)', 'шт.',
        purchase_n_montage_protection_cover_KM_1700.toFixed(2)));
}
if (purchase_n_montage_protection_cover_KM_2300) {
    table.append(createRow('Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=2300)', 'шт.',
        purchase_n_montage_protection_cover_KM_2300.toFixed(2)));
}
if (purchase_n_montage_strip_2200_for_grounding) {
    table.append(createRow('Приобретение и монтаж полосы 4х12, L=2200 для подключения к болту заземления корпуса ЩУЭ', 'шт.',
        purchase_n_montage_strip_2200_for_grounding.toFixed(2)));
}
if (purchase_n_montage_round_steel_for_strip) {
    table.append(createRow('Приобретение и монтаж сталь круглая d10 мм для подключения полосы 4х12 к заземляющему контуру опоры', 'шт.',
        purchase_n_montage_round_steel_for_strip.toFixed(2)));
}
if (purchase_n_montage_clamp_XK1) {
    table.append(createRow('Приобретение и монтаж хомутов ХК-1', 'шт.',
        purchase_n_montage_clamp_XK1.toFixed(2)));
}
if (excavation) {
    table.append(createRow('Разработка котлована под стойку', 'м' + '<sup>3</sup>',
        excavation.toFixed(2)));
}
if (soil_leveling) {
    table.append(createRow('Разравнивание вытесненного грунта вручную', 'м' + '<sup>3</sup>',
        soil_leveling.toFixed(2)));
}
if (purchase_crushed_stone_sand_gravel_mixture) {
    table.append(createRow('Приобретение щебеночно-песчано-гравийной смеси (ЩУЭ)', 'м' + '<sup>3</sup>',
        purchase_crushed_stone_sand_gravel_mixture.toFixed(2)));
}
if (purchase_concrete) {
    table.append(createRow('Приобретение бетона класса С16/20 F100', 'м' + '<sup>3</sup>',
        purchase_concrete.toFixed(2)));
}
if (installation_of_metal_structures_in_concrete) {
    table.append(createRow('Установка металлических конструкций в теле бетона', 'кг',
        installation_of_metal_structures_in_concrete.toFixed(2)));
}
if (digging_trenches) {
    table.append(createRow('Рытье траншеи в ручную', 'м' + '<sup>3</sup>',
        digging_trenches.toFixed(2)));
}
if (ground_underlay) {
    table.append(createRow('Устройство постели из просеянной земли', 'м' + '<sup>3</sup>',
        ground_underlay.toFixed(2)));
}
if (backfill) {
    table.append(createRow('Засыпка грунтом', 'м' + '<sup>3</sup>',
        backfill.toFixed(2)));
}
if (dismantling_cable_from_pylon) {
    table.append(createRow('Демонтаж существующего кабеля с опоры массой 1 м до 2-х кг', 'м',
        dismantling_cable_from_pylon.toFixed(2)));
}
if (dismantling_metal_corner_from_pylon) {
    table.append(createRow('Демонтаж существующего уголка с опоры', 'кг',
        dismantling_metal_corner_from_pylon.toFixed(2)));
}
if (dismantling_clamp_ZOP) {
    table.append(createRow('Демонтаж зажимов ЗОПг-2', 'шт.',
        dismantling_clamp_ZOP.toFixed(2)));
}
if (dismantling_metal_construction_from_pylon) {
    table.append(createRow('Демонтаж металлоконструкций с опоры', 'кг',
        dismantling_metal_construction_from_pylon.toFixed(2)));
}
if (dismantling_INside_sleeve_4) {
    table.append(createRow('Демонтаж муфты наружной установки типа 4ПБКНттп (16-25)-1', 'шт.',
        dismantling_INside_sleeve_4.toFixed(2)));
}
if (dismantling_INside_sleeve_2) {
    table.append(createRow('Демонтаж муфты наружной установки типа 2ПБКНттп (16-25)-1', 'шт.',
        dismantling_INside_sleeve_2.toFixed(2)));
}
