import worksDataCollect from './works-data';
import createRow from './create-row';

// создание таблицы ведомости работ
const workTable = function (sem) {
  const workTable = document.createElement('TABLE');
  workTable.classList.add('works_table');

  const bodyOfWorkTable = document.createElement('TBODY');
  workTable.append(bodyOfWorkTable);

  // ЛЕГЕНДА ТАБЛИЦЫ
  // строки
  const row1OfWorkTable = document.createElement('TR');
  bodyOfWorkTable.append(row1OfWorkTable);
  // ячейки
  const td1_1OfWorkTable = document.createElement('TD');
  const td1_2OfWorkTable = document.createElement('TD');
  const td1_3OfWorkTable = document.createElement('TD');
  // места ячеек
  row1OfWorkTable.append(td1_1OfWorkTable, td1_2OfWorkTable, td1_3OfWorkTable);
  // Наполняем ячейки
  td1_1OfWorkTable.textContent = 'Наименование работ';
  td1_2OfWorkTable.textContent = 'Ед.изм.';
  td1_3OfWorkTable.textContent = 'Количество';

  const collectedDataFromSem = worksDataCollect(sem);

  console.log(collectedDataFromSem);

  if (collectedDataFromSem.routing_4x16_cable_along_pylon_with_clamps_XK1) {
    bodyOfWorkTable.append(createRow('Прокладка кабеля АВБбШВ 4х16 по опоре (с креплением хомутами ХК-1)', 'м',
      collectedDataFromSem.routing_4x16_cable_along_pylon_with_clamps_XK1));
  }
  if (collectedDataFromSem.routing_4x16_cable_along_pylon_with_protection_cover_KM) {
    bodyOfWorkTable.append(createRow('Прокладка кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=2300)', 'м',
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
    bodyOfWorkTable.append(createRow('Прокладка кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=2300)', 'м',
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
  if (collectedDataFromSem.purchase_NShAL) {
    bodyOfWorkTable.append(createRow('Приобретение и монтаж наконечника НШАЛ 16-14 на жилу СИП-4и', 'шт.',
      collectedDataFromSem.purchase_NShAL));
  }
  if (collectedDataFromSem.purchase_n_montage_TUT) {
    bodyOfWorkTable.append(createRow('Пиобретение и монтаж термоусаживаемой трубки ТУТ 35/15', 'м',
      collectedDataFromSem.purchase_n_montage_TUT));
  }
  if (collectedDataFromSem.purchase_PKV) {
    bodyOfWorkTable.append(createRow('Приобретение пасты кварце-вазилиновой (ПКВ)', 'г',
      collectedDataFromSem.purchase_PKV));
  }
  if (collectedDataFromSem.zadelka_SIP) {
    bodyOfWorkTable.append(createRow('Заделка провода СИП-4и', 'шт.',
      collectedDataFromSem.zadelka_SIP));
  }

  return workTable;
};

export default workTable;
