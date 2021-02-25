import worksDataCollect from './works-data';
import createRow from './create-row';
/*
// Переменные для таблицы ведомостей работ
let routing_4x16_cable_along_pylon_with_clamps_XK1;
let routing_4x16_cable_along_pylon_with_protection_cover_KM;
let routing_4x16_cable_in_the_trench; //  в траншее
let routing_4x16_cable_along_remote_stand; // по выносной стойке
let purchase_4x16_cable_with_2_percent;

let routing_2x16_cable_along_pylon_with_clamps_XK1;
let routing_2x16_cable_along_pylon_with_protection_cover_KM;
let routing_2x16_cable_in_the_trench; //  в траншее
let routing_2x16_cable_along_remote_stand; // по выносной стойке
let purchase_2x16_cable_with_2_percent;

let finding_an_existing_cable; // отшурфовка сущ кабеля

let routing_existing_4x16_cable_along_pylon_with_protection_cover_KM;
let routing_existing_4x16_cable_in_the_finished_trench;
let routing_existing_4x16_cable_along_remote_stand;
let routing_existing_2x16_cable_along_pylon_with_protection_cover_KM;
let routing_existing_2x16_cable_in_the_finished_trench;
let routing_existing_2x16_cable_along_remote_stand;

let wire_routing_along_constructions;
let wire_routing_in_the_pipe; // в трубе
let purchase_wire_with_2_percent;

let purchase_n_montage_INside_sleeve_4; // муфта внутренней установки 4...
let purchase_n_montage_OUTside_sleeve_4;
let purchase_n_montage_INside_sleeve_2;
let purchase_n_montage_OUTside_sleeve_2; // муфта наружной установки 2...

let purchase_n_montage_clamp_ZOP; // зажим ЗОПг-2

let purchase_n_montage_strip_2400_for_grounding; // полоса для подключения к выпуску опоры
let purchase_n_montage_protection_cover_KM_1700; // кожух защиты кабеля КМ 1700
let purchase_n_montage_protection_cover_KM_2300; // кожух защиты кабеля КМ 2300
let purchase_n_montage_strip_2200_for_grounding; // полоса для подключения к болту корпуса ЩУЭ
let purchase_n_montage_round_steel_for_strip // сталь круглая
let purchase_n_montage_clamp_XK1 // хомут ХК-1

let digging_trenches; // рытье траншеи
let ground_underlay; // устройство постели из земли
let backfill; // засыпка грунтом
let excavation; // разработка котлована под стойку
let soil_leveling; // разравнивание грунта
let purchase_crushed_stone_sand_gravel_mixture; // щебеночно-песчано-гравийная смесь
let purchase_concrete; // бетон
let installation_of_metal_structures_in_concrete; // установка металлоконструкций в бетоне

let dismantling_cable_from_pylon; // демонтаж сущ кабеля
let dismantling_metal_corner_from_pylon; // демонтаж сущ уголка
let dismantling_metal_construction_from_pylon; // демонтаж сущ металлоконструкций
let dismantling_clamp_ZOP; // демонтаж зажимов ЗОПг-2
let dismantling_INside_sleeve_4; // демонтаж муфты наружной установки 4..
let dismantling_INside_sleeve_2; // демонтаж муфты наружной установки 2..
*/
// создание таблицы ведомости работ
let workTable = function (sem) {



    let workTable = document.createElement("TABLE");
    workTable.classList.add('works_table');

    let bodyOfWorkTable = document.createElement("TBODY");
    workTable.append(bodyOfWorkTable);

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

    let collectedDataFromSem = worksDataCollect(sem);

    console.log(collectedDataFromSem);

    if (collectedDataFromSem.routing_4x16_cable_along_pylon_with_clamps_XK1) {
        bodyOfWorkTable.append(createRow('Прокладка кабеля АВБбШВ 4х16 по опоре (с креплением хомутами ХК-1)', 'м',
            collectedDataFromSem.routing_4x16_cable_along_pylon_with_clamps_XK1));
    }
    if (collectedDataFromSem.routing_4x16_cable_along_pylon_with_protection_cover_KM) {
        bodyOfWorkTable.append(createRow('Прокладка кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5,L=2300)', 'м',
            collectedDataFromSem.routing_4x16_cable_along_pylon_with_protection_cover_KM));
    }
    if (collectedDataFromSem.routing_4x16_cable_in_the_trench) {
        bodyOfWorkTable.append(createRow('Прокладка кабеля АВБбШВ 4х16 в готовой траншее', 'м',
            collectedDataFromSem.routing_4x16_cable_in_the_trench));
    }
    if (collectedDataFromSem.routing_4x16_cable_along_remote_stand) {
        bodyOfWorkTable.append(createRow('Прокладка кабеля АВБбШВ 4х16 по выносной стойке', 'м',
            collectedDataFromSem.routing_4x16_cable_along_remote_stand));
    }
    if (collectedDataFromSem.purchase_4x16_cable_with_2_percent) {
        bodyOfWorkTable.append(createRow('Приобретение кабеля АВБбШВ 4х16 всего с надбавкой 2%', 'м',
            collectedDataFromSem.purchase_4x16_cable_with_2_percent.toFixed(2)));
    }
    if (collectedDataFromSem.routing_2x16_cable_along_pylon_with_clamps_XK1) {
        bodyOfWorkTable.append(createRow('Прокладка кабеля АВБбШВ 2х16 по опоре (с креплением хомутами ХК-1)', 'м',
            collectedDataFromSem.routing_2x16_cable_along_pylon_with_clamps_XK1));
    }
    if (collectedDataFromSem.routing_2x16_cable_along_pylon_with_protection_cover_KM) {
        bodyOfWorkTable.append(createRow('Прокладка кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5,L=2300)', 'м',
            collectedDataFromSem.routing_2x16_cable_along_pylon_with_protection_cover_KM));
    }
    if (collectedDataFromSem.routing_2x16_cable_in_the_trench) {
        bodyOfWorkTable.append(createRow('Прокладка кабеля АВБбШВ 2х16 в готовой траншее', 'м',
            collectedDataFromSem.routing_2x16_cable_in_the_trench));
    }
    if (collectedDataFromSem.routing_2x16_cable_along_remote_stand) {
        bodyOfWorkTable.append(createRow('Прокладка кабеля АВБбШВ 2х16 по выносной стойке', 'м',
            collectedDataFromSem.routing_2x16_cable_along_remote_stand));
    }
    if (collectedDataFromSem.purchase_2x16_cable_with_2_percent) {
        bodyOfWorkTable.append(createRow('Приобретение кабеля АВБбШВ 2х16 всего с надбавкой 2%', 'м',
            collectedDataFromSem.purchase_2x16_cable_with_2_percent.toFixed(2)));
    }
    if (collectedDataFromSem.finding_an_existing_cable) {
        bodyOfWorkTable.append(createRow('Отшурфовка существующего кабеля', 'м' + '<sup>3</sup>',
            collectedDataFromSem.finding_an_existing_cable));
    }
    if (collectedDataFromSem.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM) {
        bodyOfWorkTable.append(createRow('Прокладка существующего кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=1700)', 'м',
            collectedDataFromSem.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM));
    }
    if (collectedDataFromSem.routing_existing_4x16_cable_in_the_finished_trench) {
        bodyOfWorkTable.append(createRow('Прокладка существующего кабеля АВБбШВ 4х16 в готовой траншее', 'м',
            collectedDataFromSem.routing_existing_4x16_cable_in_the_finished_trench));
    }
    if (collectedDataFromSem.routing_existing_4x16_cable_along_remote_stand) {
        bodyOfWorkTable.append(createRow('Прокладка существующего кабеля АВБбШВ 4х16 по выносной стойке', 'м',
            collectedDataFromSem.routing_existing_4x16_cable_along_remote_stand));
    }
    if (collectedDataFromSem.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM) {
        bodyOfWorkTable.append(createRow('Прокладка существующего кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=1700)', 'м',
            collectedDataFromSem.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM));
    }
    if (collectedDataFromSem.routing_existing_2x16_cable_in_the_finished_trench) {
        bodyOfWorkTable.append(createRow('Прокладка существующего кабеля АВБбШВ 2х16 в готовой траншее', 'м',
            collectedDataFromSem.routing_existing_2x16_cable_in_the_finished_trench));
    }
    if (collectedDataFromSem.routing_existing_2x16_cable_along_remote_stand) {
        bodyOfWorkTable.append(createRow('Прокладка существующего кабеля АВБбШВ 2х16 по выносной стойке', 'м',
            collectedDataFromSem.routing_existing_2x16_cable_along_remote_stand));
    }
    if (collectedDataFromSem.wire_routing_along_constructions) {
        bodyOfWorkTable.append(createRow('Прокладка провода СИП-4и 2х16 по конструкциям', 'м',
            collectedDataFromSem.wire_routing_along_constructions));
    }
    if (collectedDataFromSem.wire_routing_in_the_pipe) {
        bodyOfWorkTable.append(createRow('Прокладка провода СИП-4и 2х16 в трубе', 'м',
            collectedDataFromSem.wire_routing_in_the_pipe));
    }
    if (collectedDataFromSem.purchase_wire_with_2_percent) {
        bodyOfWorkTable.append(createRow('Приобретение провода СИП-4и 2х16 с надбавкой 2%', 'м',
            collectedDataFromSem.purchase_wire_with_2_percent.toFixed(2)));
    }
    if (collectedDataFromSem.purchase_n_montage_INside_sleeve_4) {
        bodyOfWorkTable.append(createRow('Приобретение и монтаж муфт внутренней установки типа 4ПБКВттп (16-25)-1', 'шт.',
            collectedDataFromSem.purchase_n_montage_INside_sleeve_4));
    }
    if (collectedDataFromSem.purchase_n_montage_OUTside_sleeve_4) {
        bodyOfWorkTable.append(createRow('Приобретение и монтаж муфт наружной установки типа 4ПБКНттп (16-25)-1', 'шт.',
            collectedDataFromSem.purchase_n_montage_OUTside_sleeve_4));
    }
    if (collectedDataFromSem.purchase_n_montage_INside_sleeve_2) {
        bodyOfWorkTable.append(createRow('Приобретение и монтаж муфт внутренней установки типа 2ПБКВттп (16-25)-1', 'шт.',
            collectedDataFromSem.purchase_n_montage_INside_sleeve_2));
    }
    if (collectedDataFromSem.purchase_n_montage_OUTside_sleeve_2) {
        bodyOfWorkTable.append(createRow('Приобретение и монтаж муфт наружной установки типа 2ПБКНттп (16-25)-1', 'шт.',
            collectedDataFromSem.purchase_n_montage_OUTside_sleeve_2));
    }
    if (collectedDataFromSem.purchase_n_montage_clamp_ZOP) {
        bodyOfWorkTable.append(createRow('Приобретение и монтаж зажимов ЗОПг-2', 'шт.',
            collectedDataFromSem.purchase_n_montage_clamp_ZOP));
    }
    if (collectedDataFromSem.purchase_n_montage_strip_2400_for_grounding) {
        bodyOfWorkTable.append(createRow('Приобретение и монтаж полосы 4х12, L=2400 для подключения к заземляющему выпуску опоры', 'шт.',
            collectedDataFromSem.purchase_n_montage_strip_2400_for_grounding));
    }
    if (collectedDataFromSem.purchase_n_montage_protection_cover_KM_1700) {
        bodyOfWorkTable.append(createRow('Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=1700)', 'шт.',
            collectedDataFromSem.purchase_n_montage_protection_cover_KM_1700));
    }
    if (collectedDataFromSem.purchase_n_montage_protection_cover_KM_2300) {
        bodyOfWorkTable.append(createRow('Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=2300)', 'шт.',
            collectedDataFromSem.purchase_n_montage_protection_cover_KM_2300));
    }
    if (collectedDataFromSem.purchase_n_montage_strip_2200_for_grounding) {
        bodyOfWorkTable.append(createRow('Приобретение и монтаж полосы 4х12, L=2200 для подключения к болту заземления корпуса ЩУЭ', 'шт.',
            collectedDataFromSem.purchase_n_montage_strip_2200_for_grounding));
    }
    if (collectedDataFromSem.purchase_n_montage_round_steel_for_strip) {
        bodyOfWorkTable.append(createRow('Приобретение и монтаж сталь круглая d10 мм для подключения полосы 4х12 к заземляющему контуру опоры', 'шт.',
            collectedDataFromSem.purchase_n_montage_round_steel_for_strip));
    }
    if (collectedDataFromSem.purchase_n_montage_clamp_XK1) {
        bodyOfWorkTable.append(createRow('Приобретение и монтаж хомутов ХК-1', 'шт.',
            collectedDataFromSem.purchase_n_montage_clamp_XK1));
    }
    if (collectedDataFromSem.excavation) {
        bodyOfWorkTable.append(createRow('Разработка котлована под стойку', 'м' + '<sup>3</sup>',
            collectedDataFromSem.excavation));
    }
    if (collectedDataFromSem.soil_leveling) {
        bodyOfWorkTable.append(createRow('Разравнивание вытесненного грунта вручную', 'м' + '<sup>3</sup>',
            collectedDataFromSem.soil_leveling));
    }
    if (collectedDataFromSem.purchase_crushed_stone_sand_gravel_mixture) {
        bodyOfWorkTable.append(createRow('Приобретение щебеночно-песчано-гравийной смеси (ЩУЭ)', 'м' + '<sup>3</sup>',
            collectedDataFromSem.purchase_crushed_stone_sand_gravel_mixture));
    }
    if (collectedDataFromSem.purchase_concrete) {
        bodyOfWorkTable.append(createRow('Приобретение бетона класса С16/20 F100', 'м' + '<sup>3</sup>',
            collectedDataFromSem.purchase_concrete));
    }
    if (collectedDataFromSem.installation_of_metal_structures_in_concrete) {
        bodyOfWorkTable.append(createRow('Установка металлических конструкций в теле бетона', 'кг',
            collectedDataFromSem.installation_of_metal_structures_in_concrete));
    }
    if (collectedDataFromSem.digging_trenches) {
        bodyOfWorkTable.append(createRow('Рытье траншеи в ручную', 'м' + '<sup>3</sup>',
            collectedDataFromSem.digging_trenches));
    }
    if (collectedDataFromSem.ground_underlay) {
        bodyOfWorkTable.append(createRow('Устройство постели из просеянной земли', 'м' + '<sup>3</sup>',
            collectedDataFromSem.ground_underlay));
    }
    if (collectedDataFromSem.backfill) {
        bodyOfWorkTable.append(createRow('Засыпка грунтом', 'м' + '<sup>3</sup>',
            collectedDataFromSem.backfill));
    }
    if (collectedDataFromSem.dismantling_cable_from_pylon) {
        bodyOfWorkTable.append(createRow('Демонтаж существующего кабеля с опоры массой 1 м до 2-х кг', 'м',
            collectedDataFromSem.dismantling_cable_from_pylon));
    }
    if (collectedDataFromSem.dismantling_metal_corner_from_pylon) {
        bodyOfWorkTable.append(createRow('Демонтаж существующего уголка с опоры', 'кг',
            collectedDataFromSem.dismantling_metal_corner_from_pylon));
    }
    if (collectedDataFromSem.dismantling_clamp_ZOP) {
        bodyOfWorkTable.append(createRow('Демонтаж зажимов ЗОПг-2', 'шт.',
            collectedDataFromSem.dismantling_clamp_ZOP));
    }
    if (collectedDataFromSem.dismantling_metal_construction_from_pylon) {
        bodyOfWorkTable.append(createRow('Демонтаж металлоконструкций с опоры', 'кг',
            collectedDataFromSem.dismantling_metal_construction_from_pylon));
    }
    if (collectedDataFromSem.dismantling_INside_sleeve_4) {
        bodyOfWorkTable.append(createRow('Демонтаж муфты наружной установки типа 4ПБКНттп (16-25)-1', 'шт.',
            collectedDataFromSem.dismantling_INside_sleeve_4));
    }
    if (collectedDataFromSem.dismantling_INside_sleeve_2) {
        bodyOfWorkTable.append(createRow('Демонтаж муфты наружной установки типа 2ПБКНттп (16-25)-1', 'шт.',
            collectedDataFromSem.dismantling_INside_sleeve_2));
    }


    /*
        //если ЩУЭ на стойке и есть 3ф
        if (sem.SEMType.split('-')[4] == '2' && sem.counterCountInSEM !== 1) {
    
            if (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === '3фК') {
                routing_4x16_cable_along_pylon_with_clamps_XK1 = 7.5;
                routing_4x16_cable_along_pylon_with_protection_cover_KM = 2.3;
                routing_4x16_cable_in_the_trench = 2;
                routing_4x16_cable_along_remote_stand = 3.4;
            } else if (sem.counterCountInSEM === 2 && sem.inputFromSem === 'ВВ') {
                routing_4x16_cable_along_pylon_with_clamps_XK1 = 22.5;
                routing_4x16_cable_along_pylon_with_protection_cover_KM = 6.9;
                routing_4x16_cable_in_the_trench = 6;
                routing_4x16_cable_along_remote_stand = 10.2;
            } else {
                routing_4x16_cable_along_pylon_with_clamps_XK1 = 15;
                routing_4x16_cable_along_pylon_with_protection_cover_KM = 4.6;
                routing_4x16_cable_in_the_trench = 4;
                routing_4x16_cable_along_remote_stand = 6.8;
            }
            purchase_4x16_cable_with_2_percent = (routing_4x16_cable_along_pylon_with_clamps_XK1 +
                routing_4x16_cable_along_pylon_with_protection_cover_KM +
                routing_4x16_cable_in_the_trench + routing_4x16_cable_along_remote_stand) * 1.02;
    
            // Прокладка кабеля АВБбШВ 4х16 по опоре (с креплением хомутами ХК-1)
            let row2OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row2OfWorkTable);
            // ячейки
            let td2_1OfWorkTable = document.createElement("TD");
            let td2_2OfWorkTable = document.createElement("TD");
            let td2_3OfWorkTable = document.createElement("TD");
            // места ячеек
            row2OfWorkTable.append(td2_1OfWorkTable, td2_2OfWorkTable, td2_3OfWorkTable);
            // Наполняем ячейки
            td2_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 4х16 по опоре (с креплением хомутами ХК-1)';
            td2_2OfWorkTable.textContent = 'м';
            td2_3OfWorkTable.textContent = routing_4x16_cable_along_pylon_with_clamps_XK1;
    
            // Прокладка кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=2300)
            let row3OfWorkTable = document.createElement("TR");
            let row3_1OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row3OfWorkTable, row3_1OfWorkTable);
    
            // ячейки
            let td3_1OfWorkTable = document.createElement("TD");
            let td3_2OfWorkTable = document.createElement("TD");
            let td3_3OfWorkTable = document.createElement("TD");
            let td3_1_1OfWorkTable = document.createElement("TD");
            let td3_2_1OfWorkTable = document.createElement("TD");
            let td3_3_1OfWorkTable = document.createElement("TD");
            // места ячеек
            row3OfWorkTable.append(td3_1OfWorkTable, td3_2OfWorkTable, td3_3OfWorkTable);
    
            row3_1OfWorkTable.append(td3_1_1OfWorkTable, td3_2_1OfWorkTable, td3_3_1OfWorkTable);
    
            // Наполняем ячейки
            td3_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5,';
            td3_2OfWorkTable.textContent = 'м';
            td3_3OfWorkTable.textContent = routing_4x16_cable_along_pylon_with_protection_cover_KM;
            td3_1_1OfWorkTable.textContent = 'L=2300)';
            td3_2_1OfWorkTable.textContent = '';
            td3_3_1OfWorkTable.textContent = '';
    
            // Прокладка кабеля АВБбШВ 4х16 в готовой траншее
            let row4OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row4OfWorkTable);
            // ячейки
            let td4_1OfWorkTable = document.createElement("TD");
            let td4_2OfWorkTable = document.createElement("TD");
            let td4_3OfWorkTable = document.createElement("TD");
            // места ячеек
            row4OfWorkTable.append(td4_1OfWorkTable, td4_2OfWorkTable, td4_3OfWorkTable);
    
            // Наполняем ячейки
            td4_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 4х16 в готовой траншее';
            td4_2OfWorkTable.textContent = 'м';
            td4_3OfWorkTable.textContent = routing_4x16_cable_in_the_trench;
    
            // Прокладка кабеля АВБбШВ 4х16 по выносной стойке
            let row5OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row5OfWorkTable);
            // ячейки
            let td5_1OfWorkTable = document.createElement("TD");
            let td5_2OfWorkTable = document.createElement("TD");
            let td5_3OfWorkTable = document.createElement("TD");
            // места ячеек
            row5OfWorkTable.append(td5_1OfWorkTable, td5_2OfWorkTable, td5_3OfWorkTable);
    
            // Наполняем ячейки
            td5_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 4х16 по выносной стойке';
            td5_2OfWorkTable.textContent = 'м';
            td5_3OfWorkTable.textContent = routing_4x16_cable_along_remote_stand;
    
            // Приобретение кабеля АВБбШВ 4х16 всего с надбавкой 2%
            let row6OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row6OfWorkTable);
            // ячейки
            let td6_1OfWorkTable = document.createElement("TD");
            let td6_2OfWorkTable = document.createElement("TD");
            let td6_3OfWorkTable = document.createElement("TD");
            // места ячеек
            row6OfWorkTable.append(td6_1OfWorkTable, td6_2OfWorkTable, td6_3OfWorkTable);
    
            // Наполняем ячейки
            td6_1OfWorkTable.textContent = 'Приобретение кабеля АВБбШВ 4х16 всего с надбавкой 2%';
            td6_2OfWorkTable.textContent = 'м';
            td6_3OfWorkTable.textContent = purchase_4x16_cable_with_2_percent.toFixed(2);
        }
    
        //если ЩУЭ на стойке и (есть 1х1ф или 2х1ф) но, если это 3-2-2, то только 1фК или КК
        if (sem.SEMType.split('-')[4] == '2' && ((sem.SEMType.split('-')[2] == '1') ||
            (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem !== 'КК' &&
                sem.inputFromSem !== '1фК'))) {
    
            if (((sem.SEMType.split('-')[2] == '1') && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК')) ||
                (sem.SEMType.split('-')[2] == '3') && (sem.inputFromSem === 'ВВ' || sem.inputFromSem === '3фК')) {
                routing_2x16_cable_along_pylon_with_clamps_XK1 = 7.5;
                routing_2x16_cable_along_pylon_with_protection_cover_KM = 2.3;
                routing_2x16_cable_in_the_trench = 2;
                routing_2x16_cable_along_remote_stand = 3.4;
            } else if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'ВВ') {
                routing_2x16_cable_along_pylon_with_clamps_XK1 = 22.5;
                routing_2x16_cable_along_pylon_with_protection_cover_KM = 6.9;
                routing_2x16_cable_in_the_trench = 6;
                routing_2x16_cable_along_remote_stand = 10.2;
            } else {
                routing_2x16_cable_along_pylon_with_clamps_XK1 = 15;
                routing_2x16_cable_along_pylon_with_protection_cover_KM = 4.6;
                routing_2x16_cable_in_the_trench = 4;
                routing_2x16_cable_along_remote_stand = 6.8;
            }
            purchase_2x16_cable_with_2_percent = (routing_2x16_cable_along_pylon_with_clamps_XK1 +
                routing_2x16_cable_along_pylon_with_protection_cover_KM +
                routing_2x16_cable_in_the_trench + routing_2x16_cable_along_remote_stand) * 1.02;
    
            // Прокладка кабеля АВБбШВ 2х16 по опоре (с креплением хомутами ХК-1)
            let row7OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row7OfWorkTable);
            // ячейки
            let td7_1OfWorkTable = document.createElement("TD");
            let td7_2OfWorkTable = document.createElement("TD");
            let td7_3OfWorkTable = document.createElement("TD");
            // места ячеек
            row7OfWorkTable.append(td7_1OfWorkTable, td7_2OfWorkTable, td7_3OfWorkTable);
    
            // Наполняем ячейки
            td7_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 2х16 по опоре (с креплением хомутами ХК-1)';
            td7_2OfWorkTable.textContent = 'м';
            td7_3OfWorkTable.textContent = routing_2x16_cable_along_pylon_with_clamps_XK1;
    
            // Прокладка кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=2300)
            let row8OfWorkTable = document.createElement("TR");
            let row8_1OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row8OfWorkTable, row8_1OfWorkTable);
    
            // ячейки
            let td8_1OfWorkTable = document.createElement("TD");
            let td8_2OfWorkTable = document.createElement("TD");
            let td8_3OfWorkTable = document.createElement("TD");
            let td8_1_1OfWorkTable = document.createElement("TD");
            let td8_2_1OfWorkTable = document.createElement("TD");
            let td8_3_1OfWorkTable = document.createElement("TD");
            // места ячеек
            row8OfWorkTable.append(td8_1OfWorkTable, td8_2OfWorkTable, td8_3OfWorkTable);
    
            row8_1OfWorkTable.append(td8_1_1OfWorkTable, td8_2_1OfWorkTable, td8_3_1OfWorkTable);
    
            // Наполняем ячейки
            td8_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5,';
            td8_2OfWorkTable.textContent = 'м';
            td8_3OfWorkTable.textContent = routing_2x16_cable_along_pylon_with_protection_cover_KM;
            td8_1_1OfWorkTable.textContent = 'L=2300)';
            td8_2_1OfWorkTable.textContent = '';
            td8_3_1OfWorkTable.textContent = '';
    
            // Прокладка кабеля АВБбШВ 2х16 в готовой траншее
            let row9OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row9OfWorkTable);
            // ячейки
            let td9_1OfWorkTable = document.createElement("TD");
            let td9_2OfWorkTable = document.createElement("TD");
            let td9_3OfWorkTable = document.createElement("TD");
            // места ячеек
            row9OfWorkTable.append(td9_1OfWorkTable, td9_2OfWorkTable, td9_3OfWorkTable);
    
            // Наполняем ячейки
            td9_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 2х16 в готовой траншее';
            td9_2OfWorkTable.textContent = 'м';
            td9_3OfWorkTable.textContent = routing_2x16_cable_in_the_trench;
    
            // Прокладка кабеля АВБбШВ 2х16 по выносной стойке
            let row10OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row10OfWorkTable);
            // ячейки
            let td10_1OfWorkTable = document.createElement("TD");
            let td10_2OfWorkTable = document.createElement("TD");
            let td10_3OfWorkTable = document.createElement("TD");
            // места ячеек
            row10OfWorkTable.append(td10_1OfWorkTable, td10_2OfWorkTable, td10_3OfWorkTable);
    
            // Наполняем ячейки
            td10_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 2х16 по выносной стойке';
            td10_2OfWorkTable.textContent = 'м';
            td10_3OfWorkTable.textContent = routing_2x16_cable_along_remote_stand;
    
            // Приобретение кабеля АВБбШВ 2х16 всего с надбавкой 2%
            let row11OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row11OfWorkTable);
            // ячейки
            let td11_1OfWorkTable = document.createElement("TD");
            let td11_2OfWorkTable = document.createElement("TD");
            let td11_3OfWorkTable = document.createElement("TD");
            // места ячеек
            row11OfWorkTable.append(td11_1OfWorkTable, td11_2OfWorkTable, td11_3OfWorkTable);
    
            // Наполняем ячейки
            td11_1OfWorkTable.textContent = 'Приобретение кабеля АВБбШВ 2х16 всего с надбавкой 2%';
            td11_2OfWorkTable.textContent = 'м';
            td11_3OfWorkTable.textContent = purchase_2x16_cable_with_2_percent.toFixed(2);
        }
    
      //если ЩУЭ на стойке, и есть К
      if (sem.SEMType.split('-')[4] == '2' && sem.inputFromSem.includes('К')) {
  
          if (sem.inputFromSem === 'КК') {
              finding_an_existing_cable = 0.56;
          } else {
              finding_an_existing_cable = 0.28;
          }
  
          // Отшурфовка существующего кабеля
          let row12OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row12OfWorkTable);
          // ячейки
          let td12_1OfWorkTable = document.createElement("TD");
          let td12_2OfWorkTable = document.createElement("TD");
          let td12_3OfWorkTable = document.createElement("TD");
          // места ячеек
          row12OfWorkTable.append(td12_1OfWorkTable, td12_2OfWorkTable, td12_3OfWorkTable);
  
          // Наполняем ячейки
          td12_1OfWorkTable.textContent = 'Отшурфовка существующего кабеля';
          td12_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
          td12_3OfWorkTable.textContent = finding_an_existing_cable;
      }
  
        //если ЩУЭ на опоре и есть 3фК ...
        if (sem.SEMType.split('-')[4] === '1' && sem.SEMType.split('-')[2] !== '1'
            && sem.inputFromSem.includes('К') && !sem.inputFromSem.includes('1фК')) {
    
            if (sem.SEMType.split('-')[2] === '2' && sem.inputFromSem === 'КК') {
                routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 3.4;
            } else {
                routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 1.7;
            }
    
            // Прокладка существующего кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=1700)
            let row13OfWorkTable = document.createElement("TR");
            let row13_1OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row13OfWorkTable, row13_1OfWorkTable);
    
            // ячейки
            let td13_1OfWorkTable = document.createElement("TD");
            let td13_2OfWorkTable = document.createElement("TD");
            let td13_3OfWorkTable = document.createElement("TD");
            let td13_1_1OfWorkTable = document.createElement("TD");
            let td13_2_1OfWorkTable = document.createElement("TD");
            let td13_3_1OfWorkTable = document.createElement("TD");
            // места ячеек
            row13OfWorkTable.append(td13_1OfWorkTable, td13_2OfWorkTable, td13_3OfWorkTable);
    
            row13_1OfWorkTable.append(td13_1_1OfWorkTable, td13_2_1OfWorkTable, td13_3_1OfWorkTable);
    
            // Наполняем ячейки
            td13_1OfWorkTable.textContent = 'Прокладка существующего кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ';
            td13_2OfWorkTable.textContent = 'м';
            td13_3OfWorkTable.textContent = routing_existing_4x16_cable_along_pylon_with_protection_cover_KM;
            td13_1_1OfWorkTable.textContent = '(уголок 75х75х5, L=1700)';
            td13_2_1OfWorkTable.textContent = '';
            td13_3_1OfWorkTable.textContent = '';
        }
    
        //если ЩУЭ на стойке и есть 3фК ...
        if (sem.SEMType.split('-')[4] == '2' &&
            sem.SEMType.split('-')[2] !== '1' &&
            sem.inputFromSem.includes('К') && !sem.inputFromSem.includes('1фК')
        ) {
    
            if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'КК') {
                routing_existing_4x16_cable_in_the_finished_trench = 4;
                routing_existing_4x16_cable_along_remote_stand = 6.8;
            } else {
                routing_existing_4x16_cable_in_the_finished_trench = 2;
                routing_existing_4x16_cable_along_remote_stand = 3.4;
            }
    
            // Прокладка существующего кабеля АВБбШВ 4х16 в готовой траншее
            let row14OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row14OfWorkTable);
            // ячейки
            let td14_1OfWorkTable = document.createElement("TD");
            let td14_2OfWorkTable = document.createElement("TD");
            let td14_3OfWorkTable = document.createElement("TD");
            // места ячеек
            row14OfWorkTable.append(td14_1OfWorkTable, td14_2OfWorkTable, td14_3OfWorkTable);
    
            // Наполняем ячейки
            td14_1OfWorkTable.textContent = 'Прокладка существующего кабеля АВБбШВ 4х16 в готовой траншее';
            td14_2OfWorkTable.textContent = 'м';
            td14_3OfWorkTable.textContent = routing_existing_4x16_cable_in_the_finished_trench;
    
            // Прокладка существующего кабеля АВБбШВ 4х16 по выносной стойке
            let row15OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row15OfWorkTable);
            // ячейки
            let td15_1OfWorkTable = document.createElement("TD");
            let td15_2OfWorkTable = document.createElement("TD");
            let td15_3OfWorkTable = document.createElement("TD");
            // места ячеек
            row15OfWorkTable.append(td15_1OfWorkTable, td15_2OfWorkTable, td15_3OfWorkTable);
    
            // Наполняем ячейки
            td15_1OfWorkTable.textContent = 'Прокладка существующего кабеля АВБбШВ 4х16 по выносной стойке';
            td15_2OfWorkTable.textContent = 'м';
            td15_3OfWorkTable.textContent = routing_existing_4x16_cable_along_remote_stand;
        }
 
        //если ЩУЭ на опоре, и есть 1фК
        if ((sem.SEMType.split('-')[4] == '1')
            && ((sem.SEMType.split('-')[2] == '1' && sem.inputFromSem.includes('К')) ||
                (sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'КК' || sem.inputFromSem === '1фК')))
        ) {
    
            if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'КК') {
                routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 3.4;
            } else {
                routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 1.7;
            }
    
            // Прокладка существующего кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=1700)
            let row16OfWorkTable = document.createElement("TR");
            let row16_1OfWorkTable = document.createElement("TR");
            bodyOfWorkTable.append(row16OfWorkTable, row16_1OfWorkTable);
    
            // ячейки
            let td16_1OfWorkTable = document.createElement("TD");
            let td16_2OfWorkTable = document.createElement("TD");
            let td16_3OfWorkTable = document.createElement("TD");
            let td16_1_1OfWorkTable = document.createElement("TD");
            let td16_2_1OfWorkTable = document.createElement("TD");
            let td16_3_1OfWorkTable = document.createElement("TD");
            // места ячеек
            row16OfWorkTable.append(td16_1OfWorkTable, td16_2OfWorkTable, td16_3OfWorkTable);
    
            row16_1OfWorkTable.append(td16_1_1OfWorkTable, td16_2_1OfWorkTable, td16_3_1OfWorkTable);
    
            // Наполняем ячейки
            td16_1OfWorkTable.textContent = 'Прокладка существующего кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ';
            td16_2OfWorkTable.textContent = 'м';
            td16_3OfWorkTable.textContent = routing_existing_2x16_cable_along_pylon_with_protection_cover_KM;
            td16_1_1OfWorkTable.textContent = '(уголок 75х75х5, L=1700)';
            td16_2_1OfWorkTable.textContent = '';
            td16_3_1OfWorkTable.textContent = '';
        }
  
     //если ЩУЭ на стойке, и есть 1фК
     if ((sem.SEMType.split('-')[4] == '2')
        && ((sem.SEMType.split('-')[2] == '1' && sem.inputFromSem.includes('К')) ||
            (sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'КК' || sem.inputFromSem === '1фК')))
     ) {
 
        if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'КК') {
            routing_existing_2x16_cable_in_the_finished_trench = 4;
            routing_existing_2x16_cable_along_remote_stand = 6.8;
        } else {
            routing_existing_2x16_cable_in_the_finished_trench = 2;
            routing_existing_2x16_cable_along_remote_stand = 3.4;
        }
 
        // Прокладка существующего кабеля АВБбШВ 2х16 в готовой траншее
        let row17OfWorkTable = document.createElement("TR");
        bodyOfWorkTable.append(row17OfWorkTable);
        // ячейки
        let td17_1OfWorkTable = document.createElement("TD");
        let td17_2OfWorkTable = document.createElement("TD");
        let td17_3OfWorkTable = document.createElement("TD");
        // места ячеек
        row17OfWorkTable.append(td17_1OfWorkTable, td17_2OfWorkTable, td17_3OfWorkTable);
 
        // Наполняем ячейки
        td17_1OfWorkTable.textContent = 'Прокладка существующего кабеля АВБбШВ 2х16 в готовой траншее';
        td17_2OfWorkTable.textContent = 'м';
        td17_3OfWorkTable.textContent = routing_existing_2x16_cable_in_the_finished_trench;
 
        // Прокладка существующего кабеля АВБбШВ 2х16 по выносной стойке
        let row18OfWorkTable = document.createElement("TR");
        bodyOfWorkTable.append(row18OfWorkTable);
        // ячейки
        let td18_1OfWorkTable = document.createElement("TD");
        let td18_2OfWorkTable = document.createElement("TD");
        let td18_3OfWorkTable = document.createElement("TD");
        // места ячеек
        row18OfWorkTable.append(td18_1OfWorkTable, td18_2OfWorkTable, td18_3OfWorkTable);
 
        // Наполняем ячейки
        td18_1OfWorkTable.textContent = 'Прокладка существующего кабеля АВБбШВ 2х16 по выносной стойке';
        td18_2OfWorkTable.textContent = 'м';
        td18_3OfWorkTable.textContent = routing_existing_2x16_cable_along_remote_stand;
    }
 
    //если ЩУЭ на опоре
    if (sem.SEMType.split('-')[4] == '1') {
 
        if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК')) {
            wire_routing_along_constructions = 1.5;
            if (sem.pillarType === 'СВ-110') {
                wire_routing_in_the_pipe = 6.4;
            } else {
                wire_routing_in_the_pipe = 5.1;
            }
        } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'ВВ') {
            wire_routing_along_constructions = 9;
            if (sem.pillarType === 'СВ-110') {
                wire_routing_in_the_pipe = 38.4;
            } else {
                wire_routing_in_the_pipe = 30.6;
            }
        } else if (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === 'ВВ') {
            wire_routing_along_constructions = 7.5;
            if (sem.pillarType === 'СВ-110') {
                wire_routing_in_the_pipe = 32;
            } else {
                wire_routing_in_the_pipe = 25.5;
            }
        } else if ((sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'ВВ') ||
            (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === '3фК')) {
            wire_routing_along_constructions = 4.5;
            if (sem.pillarType === 'СВ-110') {
                wire_routing_in_the_pipe = 19.2;
            } else {
                wire_routing_in_the_pipe = 15.3;
            }
        } else if ((sem.SEMType.split('-')[2] == '2' && (sem.inputFromSem === 'В' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'КВ')) ||
            (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === '1фК')) {
            wire_routing_along_constructions = 6;
            if (sem.pillarType === 'СВ-110') {
                wire_routing_in_the_pipe = 25.6;
            } else {
                wire_routing_in_the_pipe = 20.4;
            }
        } else {
            wire_routing_along_constructions = 3;
            if (sem.pillarType === 'СВ-110') {
                wire_routing_in_the_pipe = 12.8;
            } else {
                wire_routing_in_the_pipe = 10.2;
            }
        }
        purchase_wire_with_2_percent = (wire_routing_along_constructions +
            wire_routing_in_the_pipe) * 1.02;
 
        // Прокладка провода СИП-4и 2х16 по конструкциям
        let row19OfWorkTable = document.createElement("TR");
        bodyOfWorkTable.append(row19OfWorkTable);
        // ячейки
        let td19_1OfWorkTable = document.createElement("TD");
        let td19_2OfWorkTable = document.createElement("TD");
        let td19_3OfWorkTable = document.createElement("TD");
        // места ячеек
        row19OfWorkTable.append(td19_1OfWorkTable, td19_2OfWorkTable, td19_3OfWorkTable);
 
        // Наполняем ячейки
        td19_1OfWorkTable.textContent = 'Прокладка провода СИП-4и 2х16 по конструкциям';
        td19_2OfWorkTable.textContent = 'м';
        td19_3OfWorkTable.textContent = wire_routing_along_constructions;
 
        // Прокладка провода СИП-4и 2х16 в трубе
        let row20OfWorkTable = document.createElement("TR");
        bodyOfWorkTable.append(row20OfWorkTable);
        // ячейки
        let td20_1OfWorkTable = document.createElement("TD");
        let td20_2OfWorkTable = document.createElement("TD");
        let td20_3OfWorkTable = document.createElement("TD");
        // места ячеек
        row20OfWorkTable.append(td20_1OfWorkTable, td20_2OfWorkTable, td20_3OfWorkTable);
 
        // Наполняем ячейки
        td20_1OfWorkTable.textContent = 'Прокладка провода СИП-4и 2х16 в трубе';
        td20_2OfWorkTable.textContent = 'м';
        td20_3OfWorkTable.textContent = wire_routing_in_the_pipe;
 
        // Приобретение провода СИП-4и 2х16 с надбавкой 2%
        let row21OfWorkTable = document.createElement("TR");
        bodyOfWorkTable.append(row21OfWorkTable);
        // ячейки
        let td21_1OfWorkTable = document.createElement("TD");
        let td21_2OfWorkTable = document.createElement("TD");
        let td21_3OfWorkTable = document.createElement("TD");
        // места ячеек
        row21OfWorkTable.append(td21_1OfWorkTable, td21_2OfWorkTable, td21_3OfWorkTable);
 
        // Наполняем ячейки
        td21_1OfWorkTable.textContent = 'Приобретение провода СИП-4и 2х16 с надбавкой 2%';
        td21_2OfWorkTable.textContent = 'м';
        td21_3OfWorkTable.textContent = purchase_wire_with_2_percent.toFixed(2);
    }
 

}//
//если ЩУЭ на опоре и есть 3фК ... или на стойке и есть 3ф
if ((sem.SEMType.split('-')[4] == '1' &&
    sem.SEMType.split('-')[2] !== '1' &&
    (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '3фК')) ||
    (sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '1')
) {

    if (sem.SEMType.split('-')[2] == '2' && sem.SEMType.split('-')[3] == '2' && sem.SEMType.split('-')[4] == '2') {
        purchase_n_montage_INside_sleeve_4 = 3;
    } else if (sem.SEMType.split('-')[4] == '2' ||
        (sem.SEMType.split('-')[4] == '1' && sem.SEMType.split('-')[2] == '2' && !sem.inputFromSem === 'КК')) {
        purchase_n_montage_INside_sleeve_4 = 2;
    } else {
        purchase_n_montage_INside_sleeve_4 = 1;
    }

    // Приобретение и монтаж муфт внутренней установки типа 4ПБКВттп (16-25)-1
    let row22OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row22OfWorkTable);
    // ячейки
    let td22_1OfWorkTable = document.createElement("TD");
    let td22_2OfWorkTable = document.createElement("TD");
    let td22_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row22OfWorkTable.append(td22_1OfWorkTable, td22_2OfWorkTable, td22_3OfWorkTable);

    // Наполняем ячейки
    td22_1OfWorkTable.textContent = 'Приобретение и монтаж муфт внутренней установки типа 4ПБКВттп (16-25)-1';
    td22_2OfWorkTable.textContent = 'шт.';
    td22_3OfWorkTable.textContent = purchase_n_montage_INside_sleeve_4;
}

//если ЩУЭ на стойке и есть 3ф
// как первые 5 строк
if (sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '1') {

    if (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === '3фК') {
        purchase_n_montage_OUTside_sleeve_4 = 1;
    } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'ВВ') {
        purchase_n_montage_OUTside_sleeve_4 = 3;
    } else {
        purchase_n_montage_OUTside_sleeve_4 = 2;
    }

    // Приобретение и монтаж муфт наружной установки типа 4ПБКНттп (16-25)-1
    let row23OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row23OfWorkTable);
    // ячейки
    let td23_1OfWorkTable = document.createElement("TD");
    let td23_2OfWorkTable = document.createElement("TD");
    let td23_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row23OfWorkTable.append(td23_1OfWorkTable, td23_2OfWorkTable, td23_3OfWorkTable);

    // Наполняем ячейки
    td23_1OfWorkTable.textContent = 'Приобретение и монтаж муфт наружной установки типа 4ПБКНттп (16-25)-1';
    td23_2OfWorkTable.textContent = 'шт.';
    td23_3OfWorkTable.textContent = purchase_n_montage_OUTside_sleeve_4;
}

//если ЩУЭ на опоре и есть 1фК ... или на стойке и есть 1ф
if ((sem.SEMType.split('-')[4] == '1' &&
    sem.SEMType.split('-')[2] !== '2' &&
    (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК')) ||
    (sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '2')
) {

    if (sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[3] == '2' && sem.SEMType.split('-')[4] == '2') {
        purchase_n_montage_INside_sleeve_2 = 3;
    } else if ((sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[4] == '2') ||
        (sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[4] == '1' && sem.inputFromSem === 'КК')) {
        purchase_n_montage_INside_sleeve_2 = 2;
    } else {
        purchase_n_montage_INside_sleeve_2 = 1;
    }

    // Приобретение и монтаж муфт внутренней установки типа 2ПБКВттп (16-25)-1
    let row24OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row24OfWorkTable);
    // ячейки
    let td24_1OfWorkTable = document.createElement("TD");
    let td24_2OfWorkTable = document.createElement("TD");
    let td24_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row24OfWorkTable.append(td24_1OfWorkTable, td24_2OfWorkTable, td24_3OfWorkTable);

    // Наполняем ячейки
    td24_1OfWorkTable.textContent = 'Приобретение и монтаж муфт внутренней установки типа 2ПБКВттп (16-25)-1';
    td24_2OfWorkTable.textContent = 'шт.';
    td24_3OfWorkTable.textContent = purchase_n_montage_INside_sleeve_2;
}

//если ЩУЭ на стойке и (это чисто 1ф или это 3-2-2 с 1фВ)
if (sem.SEMType.split('-')[4] == '2' &&
    ((sem.SEMType.split('-')[2] == '1') ||
        ((sem.SEMType.split('-')[2] == '3') && (sem.inputFromSem === 'ВВ' || sem.inputFromSem === '3фК')))
) {

    if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'ВВ') {
        purchase_n_montage_OUTside_sleeve_2 = 3;
    } else if (sem.SEMType.split('-')[2] == '1' &&
        (sem.inputFromSem === 'В' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК')) {
        purchase_n_montage_OUTside_sleeve_2 = 2;
    } else {
        purchase_n_montage_OUTside_sleeve_2 = 1;
    }

    // Приобретение и монтаж муфт наружной установки типа 2ПБКНттп (16-25)-1
    let row25OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row25OfWorkTable);
    // ячейки
    let td25_1OfWorkTable = document.createElement("TD");
    let td25_2OfWorkTable = document.createElement("TD");
    let td25_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row25OfWorkTable.append(td25_1OfWorkTable, td25_2OfWorkTable, td25_3OfWorkTable);

    // Наполняем ячейки
    td25_1OfWorkTable.textContent = 'Приобретение и монтаж муфт наружной установки типа 2ПБКНттп (16-25)-1';
    td25_2OfWorkTable.textContent = 'шт.';
    td25_3OfWorkTable.textContent = purchase_n_montage_OUTside_sleeve_2;
}

//ДЛЯ ВСЕХ ЩУЭ
// Приобретение и монтаж зажимов ЗОПг-2

if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК')) {
    purchase_n_montage_clamp_ZOP = 2;
} else if (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === 'ВВ') {
    purchase_n_montage_clamp_ZOP = 10;
} else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'ВВ') {
    purchase_n_montage_clamp_ZOP = 12;
} else if (sem.inputFromSem === 'ВВ' || sem.inputFromSem === '3фК') {
    purchase_n_montage_clamp_ZOP = 6;
} else if (sem.inputFromSem === '3фК' ||
    (sem.SEMType.split('-')[2] == '2' && (sem.inputFromSem === 'В' || sem.inputFromSem === 'ВК' || sem.inputFromSem === 'КВ'))) {
    purchase_n_montage_clamp_ZOP = 8;
} else {
    purchase_n_montage_clamp_ZOP = 4;
}

let row26OfWorkTable = document.createElement("TR");
bodyOfWorkTable.append(row26OfWorkTable);
// ячейки
let td26_1OfWorkTable = document.createElement("TD");
let td26_2OfWorkTable = document.createElement("TD");
let td26_3OfWorkTable = document.createElement("TD");
// места ячеек
row26OfWorkTable.append(td26_1OfWorkTable, td26_2OfWorkTable, td26_3OfWorkTable);

// Наполняем ячейки
td26_1OfWorkTable.textContent = 'Приобретение и монтаж зажимов ЗОПг-2';
td26_2OfWorkTable.textContent = 'шт.';
td26_3OfWorkTable.textContent = purchase_n_montage_clamp_ZOP;

//если ЩУЭ на опоре (как строки 19-21)
if (sem.SEMType.split('-')[4] == '1') {

    purchase_n_montage_strip_2400_for_grounding = 1;

    // Приобретение и монтаж полосы 4х12, L=2400 для подключения к заземляющему выпуску опоры
    let row27OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row27OfWorkTable);
    // ячейки
    let td27_1OfWorkTable = document.createElement("TD");
    let td27_2OfWorkTable = document.createElement("TD");
    let td27_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row27OfWorkTable.append(td27_1OfWorkTable, td27_2OfWorkTable, td27_3OfWorkTable);

    // Наполняем ячейки
    td27_1OfWorkTable.textContent = 'Приобретение и монтаж полосы 4х12, L=2400 для подключения к заземляющему выпуску опоры';
    td27_2OfWorkTable.textContent = 'шт.';
    td27_3OfWorkTable.textContent = purchase_n_montage_strip_2400_for_grounding;
}

//если ЩУЭ на опоре, и есть К
if (sem.SEMType.split('-')[4] == '1' &&
    (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК' || sem.inputFromSem === '3фК')
) {

    purchase_n_montage_protection_cover_KM_1700 = 1;

    // Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=1700)
    let row28OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row28OfWorkTable);
    // ячейки
    let td28_1OfWorkTable = document.createElement("TD");
    let td28_2OfWorkTable = document.createElement("TD");
    let td28_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row28OfWorkTable.append(td28_1OfWorkTable, td28_2OfWorkTable, td28_3OfWorkTable);

    // Наполняем ячейки
    td28_1OfWorkTable.textContent = 'Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=1700)';
    td28_2OfWorkTable.textContent = 'шт.';
    td28_3OfWorkTable.textContent = purchase_n_montage_protection_cover_KM_1700;
}

//если ЩУЭ на стойке
if (sem.SEMType.split('-')[4] == '2') {

    purchase_n_montage_protection_cover_KM_2300 = 1;
    purchase_n_montage_strip_2200_for_grounding = 1;
    purchase_n_montage_round_steel_for_strip = 2;
    purchase_n_montage_clamp_XK1 = 3;

    excavation = 0.13; // разработка котлована под стойку
    soil_leveling = 0.13; // разравнивание грунта
    purchase_crushed_stone_sand_gravel_mixture = 0.07; // щебеночно-песчано-гравийная смесь
    purchase_concrete = 0.05; // бетон
    installation_of_metal_structures_in_concrete = 4.06; // установка металлоконструкций в бетоне

    if (sem.SEMType.split('-')[3] == '1') {
        digging_trenches = 0.54; // рытье траншеи
        ground_underlay = 0.18; // устройство постели из земли
        backfill = 0.36; // засыпка грунтом
    } else {
        digging_trenches = 0.72; // рытье траншеи
        ground_underlay = 0.24; // устройство постели из земли
        backfill = 0.48; // засыпка грунтом		
    }

    // Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=2300)
    let row29OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row29OfWorkTable);
    // ячейки
    let td29_1OfWorkTable = document.createElement("TD");
    let td29_2OfWorkTable = document.createElement("TD");
    let td29_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row29OfWorkTable.append(td29_1OfWorkTable, td29_2OfWorkTable, td29_3OfWorkTable);

    // Наполняем ячейки
    td29_1OfWorkTable.textContent = 'Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=2300)';
    td29_2OfWorkTable.textContent = 'шт.';
    td29_3OfWorkTable.textContent = purchase_n_montage_protection_cover_KM_2300;

    // Приобретение и монтаж полосы 4х12, L=2200 для подключения к болту заземления корпуса ЩУЭ
    let row30OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row30OfWorkTable);
    // ячейки
    let td30_1OfWorkTable = document.createElement("TD");
    let td30_2OfWorkTable = document.createElement("TD");
    let td30_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row30OfWorkTable.append(td30_1OfWorkTable, td30_2OfWorkTable, td30_3OfWorkTable);

    // Наполняем ячейки
    td30_1OfWorkTable.textContent = 'Приобретение и монтаж полосы 4х12, L=2200 для подключения к болту заземления корпуса ЩУЭ';
    td30_2OfWorkTable.textContent = 'шт.';
    td30_3OfWorkTable.textContent = purchase_n_montage_strip_2200_for_grounding;

    //Приобретение и монтаж сталь круглая d10 мм для подключения полосы 4х12 к заземляющему контуру опоры
    let row31OfWorkTable = document.createElement("TR");
    let row31_1OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row31OfWorkTable, row31_1OfWorkTable);

    // ячейки
    let td31_1OfWorkTable = document.createElement("TD");
    let td31_2OfWorkTable = document.createElement("TD");
    let td31_3OfWorkTable = document.createElement("TD");
    let td31_1_1OfWorkTable = document.createElement("TD");
    let td31_2_1OfWorkTable = document.createElement("TD");
    let td31_3_1OfWorkTable = document.createElement("TD");
    // места ячеек
    row31OfWorkTable.append(td31_1OfWorkTable, td31_2OfWorkTable, td31_3OfWorkTable);

    row31_1OfWorkTable.append(td31_1_1OfWorkTable, td31_2_1OfWorkTable, td31_3_1OfWorkTable);

    // Наполняем ячейки
    td31_1OfWorkTable.textContent = 'Приобретение и монтаж сталь круглая d10 мм для подключения полосы 4х12 к заземляющему';
    td31_2OfWorkTable.textContent = 'м';
    td31_3OfWorkTable.textContent = purchase_n_montage_round_steel_for_strip;
    td31_1_1OfWorkTable.textContent = 'контуру опоры';
    td31_2_1OfWorkTable.textContent = '';
    td31_3_1OfWorkTable.textContent = '';

    // Приобретение и монтаж хомутов ХК-1
    let row32OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row32OfWorkTable);
    // ячейки
    let td32_1OfWorkTable = document.createElement("TD");
    let td32_2OfWorkTable = document.createElement("TD");
    let td32_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row32OfWorkTable.append(td32_1OfWorkTable, td32_2OfWorkTable, td32_3OfWorkTable);

    // Наполняем ячейки
    td32_1OfWorkTable.textContent = 'Приобретение и монтаж хомутов ХК-1';
    td32_2OfWorkTable.textContent = 'шт.';
    td32_3OfWorkTable.textContent = purchase_n_montage_clamp_XK1;

    // Рытье траншеи в ручную
    let row33OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row33OfWorkTable);
    // ячейки
    let td33_1OfWorkTable = document.createElement("TD");
    let td33_2OfWorkTable = document.createElement("TD");
    let td33_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row33OfWorkTable.append(td33_1OfWorkTable, td33_2OfWorkTable, td33_3OfWorkTable);

    // Наполняем ячейки
    td33_1OfWorkTable.textContent = 'Рытье траншеи в ручную';
    td33_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
    td33_3OfWorkTable.textContent = digging_trenches;

    // Устройство постели из просеянной земли
    let row34OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row34OfWorkTable);
    // ячейки
    let td34_1OfWorkTable = document.createElement("TD");
    let td34_2OfWorkTable = document.createElement("TD");
    let td34_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row34OfWorkTable.append(td34_1OfWorkTable, td34_2OfWorkTable, td34_3OfWorkTable);

    // Наполняем ячейки
    td34_1OfWorkTable.textContent = 'Устройство постели из просеянной земли';
    td34_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
    td34_3OfWorkTable.textContent = ground_underlay;

    // Засыпка грунтом
    let row35OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row35OfWorkTable);
    // ячейки
    let td35_1OfWorkTable = document.createElement("TD");
    let td35_2OfWorkTable = document.createElement("TD");
    let td35_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row35OfWorkTable.append(td35_1OfWorkTable, td35_2OfWorkTable, td35_3OfWorkTable);

    // Наполняем ячейки
    td35_1OfWorkTable.textContent = 'Засыпка грунтом';
    td35_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
    td35_3OfWorkTable.textContent = backfill;

    // Разработка котлована под стойку
    let row36OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row36OfWorkTable);
    // ячейки
    let td36_1OfWorkTable = document.createElement("TD");
    let td36_2OfWorkTable = document.createElement("TD");
    let td36_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row36OfWorkTable.append(td36_1OfWorkTable, td36_2OfWorkTable, td36_3OfWorkTable);

    // Наполняем ячейки
    td36_1OfWorkTable.textContent = 'Разработка котлована под стойку';
    td36_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
    td36_3OfWorkTable.textContent = excavation;

    // Разравнивание вытесненного грунта вручную
    let row37OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row37OfWorkTable);
    // ячейки
    let td37_1OfWorkTable = document.createElement("TD");
    let td37_2OfWorkTable = document.createElement("TD");
    let td37_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row37OfWorkTable.append(td37_1OfWorkTable, td37_2OfWorkTable, td37_3OfWorkTable);

    // Наполняем ячейки
    td37_1OfWorkTable.textContent = 'Разравнивание вытесненного грунта вручную';
    td37_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
    td37_3OfWorkTable.textContent = soil_leveling;

    // Приобретение щебеночно-песчано-гравийной смеси (ЩУЭ)
    let row38OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row38OfWorkTable);
    // ячейки
    let td38_1OfWorkTable = document.createElement("TD");
    let td38_2OfWorkTable = document.createElement("TD");
    let td38_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row38OfWorkTable.append(td38_1OfWorkTable, td38_2OfWorkTable, td38_3OfWorkTable);

    // Наполняем ячейки
    td38_1OfWorkTable.textContent = 'Приобретение щебеночно-песчано-гравийной смеси (ЩУЭ)';
    td38_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
    td38_3OfWorkTable.textContent = purchase_crushed_stone_sand_gravel_mixture;

    // Приобретение бетона класса С16/20 F100   ( в 450 мм ЩУЭ)
    let row39OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row39OfWorkTable);
    // ячейки
    let td39_1OfWorkTable = document.createElement("TD");
    let td39_2OfWorkTable = document.createElement("TD");
    let td39_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row39OfWorkTable.append(td39_1OfWorkTable, td39_2OfWorkTable, td39_3OfWorkTable);

    // Наполняем ячейки
    td39_1OfWorkTable.textContent = 'Приобретение бетона класса С16/20 F100'; // (в 450 мм ЩУЭ)
    td39_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
    td39_3OfWorkTable.textContent = purchase_concrete;

    // Установка металлических конструкций в теле бетона
    let row40OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row40OfWorkTable);
    // ячейки
    let td40_1OfWorkTable = document.createElement("TD");
    let td40_2OfWorkTable = document.createElement("TD");
    let td40_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row40OfWorkTable.append(td40_1OfWorkTable, td40_2OfWorkTable, td40_3OfWorkTable);

    // Наполняем ячейки
    td40_1OfWorkTable.textContent = 'Установка металлических конструкций в теле бетона';
    td40_2OfWorkTable.textContent = 'кг';
    td40_3OfWorkTable.textContent = installation_of_metal_structures_in_concrete;
}

// если есть К
if (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК' || sem.inputFromSem === '3фК') {

    if (sem.inputFromSem === 'КК') {
        dismantling_cable_from_pylon = 16; // демонтаж сущ кабеля
    } else {
        dismantling_cable_from_pylon = 8;	// демонтаж сущ кабеля			
    }

    if (sem.inputFromSem === 'КК' && sem.SEMType.split('-')[2] !== '1') {
        dismantling_metal_corner_from_pylon = 15.84; // демонтаж сущ уголка
    } else {
        dismantling_metal_corner_from_pylon = 11.17; // демонтаж сущ уголка
    }

    dismantling_metal_construction_from_pylon = 2.01; // демонтаж сущ металлоконструкций

    if (sem.inputFromSem === 'КК' && sem.SEMType.split('-')[2] == '2') {
        dismantling_clamp_ZOP = 8; // демонтаж зажимов ЗОПг-2
    } else if (sem.inputFromSem === 'КК' && sem.SEMType.split('-')[2] == '3') {
        dismantling_clamp_ZOP = 6;	// демонтаж зажимов ЗОПг-2			
    } else if (sem.inputFromSem === '1фК' || (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК'))) {
        dismantling_clamp_ZOP = 2;	// демонтаж зажимов ЗОПг-2			
    } else {
        dismantling_clamp_ZOP = 4;	// демонтаж зажимов ЗОПг-2			
    }


    // Демонтаж существующего кабеля с опоры массой 1 м до 2-х кг
    let row41OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row41OfWorkTable);
    // ячейки
    let td41_1OfWorkTable = document.createElement("TD");
    let td41_2OfWorkTable = document.createElement("TD");
    let td41_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row41OfWorkTable.append(td41_1OfWorkTable, td41_2OfWorkTable, td41_3OfWorkTable);

    // Наполняем ячейки
    td41_1OfWorkTable.textContent = 'Демонтаж существующего кабеля с опоры массой 1 м до 2-х кг';
    td41_2OfWorkTable.textContent = 'м';
    td41_3OfWorkTable.textContent = dismantling_cable_from_pylon;

    // Демонтаж существующего уголка с опоры
    let row42OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row42OfWorkTable);
    // ячейки
    let td42_1OfWorkTable = document.createElement("TD");
    let td42_2OfWorkTable = document.createElement("TD");
    let td42_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row42OfWorkTable.append(td42_1OfWorkTable, td42_2OfWorkTable, td42_3OfWorkTable);

    // Наполняем ячейки
    td42_1OfWorkTable.textContent = 'Демонтаж существующего уголка с опоры';
    td42_2OfWorkTable.textContent = 'кг';
    td42_3OfWorkTable.textContent = dismantling_metal_corner_from_pylon;

    // Демонтаж металлоконструкций с опоры
    let row43OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row43OfWorkTable);
    // ячейки
    let td43_1OfWorkTable = document.createElement("TD");
    let td43_2OfWorkTable = document.createElement("TD");
    let td43_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row43OfWorkTable.append(td43_1OfWorkTable, td43_2OfWorkTable, td43_3OfWorkTable);

    // Наполняем ячейки
    td43_1OfWorkTable.textContent = 'Демонтаж металлоконструкций с опоры';
    td43_2OfWorkTable.textContent = 'кг';
    td43_3OfWorkTable.textContent = dismantling_metal_construction_from_pylon;

    // Демонтаж зажимов ЗОПг-2
    let row44OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row44OfWorkTable);
    // ячейки
    let td44_1OfWorkTable = document.createElement("TD");
    let td44_2OfWorkTable = document.createElement("TD");
    let td44_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row44OfWorkTable.append(td44_1OfWorkTable, td44_2OfWorkTable, td44_3OfWorkTable);

    // Наполняем ячейки
    td44_1OfWorkTable.textContent = 'Демонтаж зажимов ЗОПг-2';
    td44_2OfWorkTable.textContent = 'шт.';
    td44_3OfWorkTable.textContent = dismantling_clamp_ZOP;
}

//если есть 3фК
if (sem.SEMType.split('-')[2] !== '1' &&
    (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '3фК')
) {
    if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'КК') {
        dismantling_INside_sleeve_4 = 2;
    } else {
        dismantling_INside_sleeve_4 = 1;
    }

    // Демонтаж муфты наружной установки типа 4ПБКНттп (16-25)-1
    let row45OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row45OfWorkTable);
    // ячейки
    let td45_1OfWorkTable = document.createElement("TD");
    let td45_2OfWorkTable = document.createElement("TD");
    let td45_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row45OfWorkTable.append(td45_1OfWorkTable, td45_2OfWorkTable, td45_3OfWorkTable);

    // Наполняем ячейки
    td45_1OfWorkTable.textContent = 'Демонтаж муфты наружной установки типа 4ПБКНттп (16-25)-1';
    td45_2OfWorkTable.textContent = 'шт.';
    td45_3OfWorkTable.textContent = dismantling_INside_sleeve_4;
}

//если есть 1фК
if (sem.SEMType.split('-')[2] !== '2' &&
    (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК')
) {

    if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'КК') {
        dismantling_INside_sleeve_2 = 2;
    } else {
        dismantling_INside_sleeve_2 = 1;
    }

    // Демонтаж муфты наружной установки типа 2ПБКНттп (16-25)-1
    let row45OfWorkTable = document.createElement("TR");
    bodyOfWorkTable.append(row45OfWorkTable);
    // ячейки
    let td45_1OfWorkTable = document.createElement("TD");
    let td45_2OfWorkTable = document.createElement("TD");
    let td45_3OfWorkTable = document.createElement("TD");
    // места ячеек
    row45OfWorkTable.append(td45_1OfWorkTable, td45_2OfWorkTable, td45_3OfWorkTable);

    // Наполняем ячейки
    td45_1OfWorkTable.textContent = 'Демонтаж муфты наружной установки типа 2ПБКНттп (16-25)-1';
    td45_2OfWorkTable.textContent = 'шт.';
    td45_3OfWorkTable.textContent = dismantling_INside_sleeve_2;
}


*/
    return workTable;
}

export default workTable;
