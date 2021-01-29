let worksDataCollect = function (input) {
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
    function SEMWORKS(sem) {
        //если ЩУЭ на стойке и есть 3ф
        if (sem.SEMType.split('-')[4] == '2' && sem.counterCountInSEM !== 1) {

            if (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === '3фК') {
                this.routing_4x16_cable_along_pylon_with_clamps_XK1 = 7.5;
                this.routing_4x16_cable_along_pylon_with_protection_cover_KM = 2.3;
                this.routing_4x16_cable_in_the_trench = 2;
                this.routing_4x16_cable_along_remote_stand = 3.4;
            } else if (sem.counterCountInSEM === 2 && sem.inputFromSem === 'ВВ') {
                this.routing_4x16_cable_along_pylon_with_clamps_XK1 = 22.5;
                this.routing_4x16_cable_along_pylon_with_protection_cover_KM = 6.9;
                this.routing_4x16_cable_in_the_trench = 6;
                this.routing_4x16_cable_along_remote_stand = 10.2;
            } else {
                this.routing_4x16_cable_along_pylon_with_clamps_XK1 = 15;
                this.routing_4x16_cable_along_pylon_with_protection_cover_KM = 4.6;
                this.routing_4x16_cable_in_the_trench = 4;
                this.routing_4x16_cable_along_remote_stand = 6.8;
            }
            this.purchase_4x16_cable_with_2_percent = (this.routing_4x16_cable_along_pylon_with_clamps_XK1 +
                this.routing_4x16_cable_along_pylon_with_protection_cover_KM +
                this.routing_4x16_cable_in_the_trench + this.routing_4x16_cable_along_remote_stand) * 1.02;
        } else {
            this.routing_4x16_cable_along_pylon_with_clamps_XK1 = 0;
            this.routing_4x16_cable_along_pylon_with_protection_cover_KM = 0;
            this.routing_4x16_cable_in_the_trench = 0;
            this.routing_4x16_cable_along_remote_stand = 0;
            this.purchase_4x16_cable_with_2_percent = 0;
        }

        //если ЩУЭ на стойке и (есть 1х1ф или 2х1ф) но, если это 3-2-2, то только 1фК или КК
        if (sem.SEMType.split('-')[4] == '2' && ((sem.SEMType.split('-')[2] == '1') ||
            (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem !== 'КК' &&
                sem.inputFromSem !== '1фК'))) {

            if (((sem.SEMType.split('-')[2] == '1') && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК')) ||
                (sem.SEMType.split('-')[2] == '3') && (sem.inputFromSem === 'ВВ' || sem.inputFromSem === '3фК')) {
                    this.routing_2x16_cable_along_pylon_with_clamps_XK1 = 7.5;
                    this.routing_2x16_cable_along_pylon_with_protection_cover_KM = 2.3;
                    this.routing_2x16_cable_in_the_trench = 2;
                    this.routing_2x16_cable_along_remote_stand = 3.4;
            } else if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'ВВ') {
                this.routing_2x16_cable_along_pylon_with_clamps_XK1 = 22.5;
                this.routing_2x16_cable_along_pylon_with_protection_cover_KM = 6.9;
                this.routing_2x16_cable_in_the_trench = 6;
                this.routing_2x16_cable_along_remote_stand = 10.2;
            } else {
                this.routing_2x16_cable_along_pylon_with_clamps_XK1 = 15;
                this.routing_2x16_cable_along_pylon_with_protection_cover_KM = 4.6;
                this.routing_2x16_cable_in_the_trench = 4;
                this.routing_2x16_cable_along_remote_stand = 6.8;
            }
            this.purchase_2x16_cable_with_2_percent = (this.routing_2x16_cable_along_pylon_with_clamps_XK1 +
                this.routing_2x16_cable_along_pylon_with_protection_cover_KM +
                this.routing_2x16_cable_in_the_trench + this.routing_2x16_cable_along_remote_stand) * 1.02;

        } else {
            this.routing_2x16_cable_along_pylon_with_clamps_XK1 = 0;
            this.routing_2x16_cable_along_pylon_with_protection_cover_KM = 0;
            this.routing_2x16_cable_in_the_trench = 0;
            this.routing_2x16_cable_along_remote_stand = 0;
            this.purchase_2x16_cable_with_2_percent = 0;
        }

        //если ЩУЭ на стойке, и есть К
        if (sem.SEMType.split('-')[4] == '2' && sem.inputFromSem.includes('К')) {

            if (sem.inputFromSem === 'КК') {
                this.finding_an_existing_cable = 0.56;
            } else {
                this.finding_an_existing_cable = 0.28;
            }
        } else {
            this.finding_an_existing_cable = 0;
        }

        //если ЩУЭ на опоре и есть 3фК ...
        if (sem.SEMType.split('-')[4] === '1' && sem.SEMType.split('-')[2] !== '1'
            && sem.inputFromSem.includes('К') && !sem.inputFromSem.includes('1фК')) {

            if (sem.SEMType.split('-')[2] === '2' && sem.inputFromSem === 'КК') {
                this.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 3.4;
            } else {
                this.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 1.7;
            }
        } else {
            this.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 0;
        }

        //если ЩУЭ на стойке и есть 3фК ...
        if (sem.SEMType.split('-')[4] == '2' &&
            sem.SEMType.split('-')[2] !== '1' &&
            sem.inputFromSem.includes('К') && !sem.inputFromSem.includes('1фК')
        ) {
            if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'КК') {
                this.routing_existing_4x16_cable_in_the_finished_trench = 4;
                this.routing_existing_4x16_cable_along_remote_stand = 6.8;
            } else {
                this.routing_existing_4x16_cable_in_the_finished_trench = 2;
                this.routing_existing_4x16_cable_along_remote_stand = 3.4;
            }
        } else {
            this.routing_existing_4x16_cable_in_the_finished_trench = 0;
            this.routing_existing_4x16_cable_along_remote_stand = 0;
        }

        //если ЩУЭ на опоре, и есть 1фК
        if ((sem.SEMType.split('-')[4] == '1')
            && ((sem.SEMType.split('-')[2] == '1' && sem.inputFromSem.includes('К')) ||
                (sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'КК' || sem.inputFromSem === '1фК')))
        ) {
            if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'КК') {
                this.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 3.4;
            } else {
                this.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 1.7;
            }
        } else {
            this.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 0;
        }

        //если ЩУЭ на стойке, и есть 1фК
        if ((sem.SEMType.split('-')[4] == '2')
            && ((sem.SEMType.split('-')[2] == '1' && sem.inputFromSem.includes('К')) ||
                (sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'КК' || sem.inputFromSem === '1фК')))
        ) {

            if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'КК') {
                this.routing_existing_2x16_cable_in_the_finished_trench = 4;
                this.routing_existing_2x16_cable_along_remote_stand = 6.8;
            } else {
                this.routing_existing_2x16_cable_in_the_finished_trench = 2;
                this.routing_existing_2x16_cable_along_remote_stand = 3.4;
            }
        } else {
            this.routing_existing_2x16_cable_in_the_finished_trench = 0;
            this.routing_existing_2x16_cable_along_remote_stand = 0;
        }

        //если ЩУЭ на опоре
        if (sem.SEMType.split('-')[4] == '1') {
            if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК')) {
                this.wire_routing_along_constructions = 1.5;
                if (sem.pillarType === 'СВ-110') {
                    this.wire_routing_in_the_pipe = 6.4;
                } else {
                    this.wire_routing_in_the_pipe = 5.1;
                }
            } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'ВВ') {
                this.wire_routing_along_constructions = 9;
                if (sem.pillarType === 'СВ-110') {
                    this.wire_routing_in_the_pipe = 38.4;
                } else {
                    this.wire_routing_in_the_pipe = 30.6;
                }
            } else if (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === 'ВВ') {
                this.wire_routing_along_constructions = 7.5;
                if (sem.pillarType === 'СВ-110') {
                    this.wire_routing_in_the_pipe = 32;
                } else {
                    this.wire_routing_in_the_pipe = 25.5;
                }
            } else if ((sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'ВВ') ||
                (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === '3фК')) {
                    this.wire_routing_along_constructions = 4.5;
                if (sem.pillarType === 'СВ-110') {
                    this.wire_routing_in_the_pipe = 19.2;
                } else {
                    this.wire_routing_in_the_pipe = 15.3;
                }
            } else if ((sem.SEMType.split('-')[2] == '2' && (sem.inputFromSem === 'В' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'КВ')) ||
                (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === '1фК')) {
                    this.wire_routing_along_constructions = 6;
                if (sem.pillarType === 'СВ-110') {
                    this.wire_routing_in_the_pipe = 25.6;
                } else {
                    this.wire_routing_in_the_pipe = 20.4;
                }
            } else {
                this.wire_routing_along_constructions = 3;
                if (sem.pillarType === 'СВ-110') {
                    this.wire_routing_in_the_pipe = 12.8;
                } else {
                    this.wire_routing_in_the_pipe = 10.2;
                }
            }
            this.purchase_wire_with_2_percent = (this.wire_routing_along_constructions +
                this.wire_routing_in_the_pipe) * 1.02;
        } else {
            this.wire_routing_along_constructions = 0;
            this.wire_routing_in_the_pipe = 0;
            this.purchase_wire_with_2_percent = 0;
        }

        //если ЩУЭ на опоре и есть 3фК ... или на стойке и есть 3ф
        if ((sem.SEMType.split('-')[4] == '1' &&
            sem.SEMType.split('-')[2] !== '1' &&
            (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '3фК')) ||
            (sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '1')
        ) {
            if (sem.SEMType.split('-')[2] == '2' && sem.SEMType.split('-')[3] == '2' && sem.SEMType.split('-')[4] == '2') {
                this.purchase_n_montage_INside_sleeve_4 = 3;
            } else if (sem.SEMType.split('-')[4] == '2' ||
                (sem.SEMType.split('-')[4] == '1' && sem.SEMType.split('-')[2] == '2' && !sem.inputFromSem === 'КК')) {
                    this.purchase_n_montage_INside_sleeve_4 = 2;
            } else {
                this.purchase_n_montage_INside_sleeve_4 = 1;
            }
        } else {
            this.purchase_n_montage_INside_sleeve_4 = 0;
        }

        //если ЩУЭ на стойке и есть 3ф
        // как первые 5 строк
        if (sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '1') {
            if (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === '3фК') {
                this.purchase_n_montage_OUTside_sleeve_4 = 1;
            } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'ВВ') {
                this.purchase_n_montage_OUTside_sleeve_4 = 3;
            } else {
                this.purchase_n_montage_OUTside_sleeve_4 = 2;
            }
        } else {
            this.purchase_n_montage_OUTside_sleeve_4 = 0;
        }

        //если ЩУЭ на опоре и есть 1фК ... или на стойке и есть 1ф
        if ((sem.SEMType.split('-')[4] == '1' &&
            sem.SEMType.split('-')[2] !== '2' &&
            (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК')) ||
            (sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '2')
        ) {

            if (sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[3] == '2' && sem.SEMType.split('-')[4] == '2') {
                this.purchase_n_montage_INside_sleeve_2 = 3;
            } else if ((sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[4] == '2') ||
                (sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[4] == '1' && sem.inputFromSem === 'КК')) {
                    this.purchase_n_montage_INside_sleeve_2 = 2;
            } else {
                this.purchase_n_montage_INside_sleeve_2 = 1;
            }
        } else {
            this.purchase_n_montage_INside_sleeve_2 = 0;
        }

        //если ЩУЭ на стойке и (это чисто 1ф или это 3-2-2 с 1фВ)
        if (sem.SEMType.split('-')[4] == '2' &&
            ((sem.SEMType.split('-')[2] == '1') ||
                ((sem.SEMType.split('-')[2] == '3') && (sem.inputFromSem === 'ВВ' || sem.inputFromSem === '3фК')))
        ) {

            if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'ВВ') {
                this.purchase_n_montage_OUTside_sleeve_2 = 3;
            } else if (sem.SEMType.split('-')[2] == '1' &&
                (sem.inputFromSem === 'В' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК')) {
                    this.purchase_n_montage_OUTside_sleeve_2 = 2;
            } else {
                this.purchase_n_montage_OUTside_sleeve_2 = 1;
            }
        } else {
            this.purchase_n_montage_OUTside_sleeve_2 = 0;
        }

        //ДЛЯ ВСЕХ ЩУЭ
        // Приобретение и монтаж зажимов ЗОПг-2

        if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК')) {
            this.purchase_n_montage_clamp_ZOP = 2;
        } else if (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === 'ВВ') {
            this.purchase_n_montage_clamp_ZOP = 10;
        } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'ВВ') {
            this.purchase_n_montage_clamp_ZOP = 12;
        } else if (sem.inputFromSem === 'ВВ' || sem.inputFromSem === '3фК') {
            this.purchase_n_montage_clamp_ZOP = 6;
        } else if (sem.inputFromSem === '3фК' ||
            (sem.SEMType.split('-')[2] == '2' && (sem.inputFromSem === 'В' || sem.inputFromSem === 'ВК' || sem.inputFromSem === 'КВ'))) {
            this.purchase_n_montage_clamp_ZOP = 8;
        } else {
            this.purchase_n_montage_clamp_ZOP = 4;
        }

        //если ЩУЭ на опоре (как строки 19-21)
        if (sem.SEMType.split('-')[4] == '1') {
            this.purchase_n_montage_strip_2400_for_grounding = 1;
            // Приобретение и монтаж полосы 4х12, L=2400 для подключения к заземляющему выпуску опоры
        } else {
            this.purchase_n_montage_strip_2400_for_grounding = 0;
        }

        //если ЩУЭ на опоре, и есть К
        if (sem.SEMType.split('-')[4] == '1' &&
            (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК' || sem.inputFromSem === '3фК')
        ) {
            // Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=1700)
            this.purchase_n_montage_protection_cover_KM_1700 = 1;
        } else {
            this.purchase_n_montage_protection_cover_KM_1700 = 0;
        }

        //если ЩУЭ на стойке
        if (sem.SEMType.split('-')[4] == '2') {

            this.purchase_n_montage_protection_cover_KM_2300 = 1;
            this.purchase_n_montage_strip_2200_for_grounding = 1;
            this.purchase_n_montage_round_steel_for_strip = 2;
            this.purchase_n_montage_clamp_XK1 = 3;

            this.excavation = 0.13; // разработка котлована под стойку
            this.soil_leveling = 0.13; // разравнивание грунта
            this.purchase_crushed_stone_sand_gravel_mixture = 0.07; // щебеночно-песчано-гравийная смесь
            this.purchase_concrete = 0.05; // бетон
            this.installation_of_metal_structures_in_concrete = 4.06; // установка металлоконструкций в бетоне

            if (sem.SEMType.split('-')[3] == '1') {
                this.digging_trenches = 0.54; // рытье траншеи
                this.ground_underlay = 0.18; // устройство постели из земли
                this.backfill = 0.36; // засыпка грунтом
            } else {
                this.digging_trenches = 0.72; // рытье траншеи
                this.ground_underlay = 0.24; // устройство постели из земли
                this.backfill = 0.48; // засыпка грунтом		
            }
        } else {
            this.purchase_n_montage_protection_cover_KM_2300 = 0;
            this.purchase_n_montage_strip_2200_for_grounding = 0;
            this.purchase_n_montage_round_steel_for_strip = 0;
            this.purchase_n_montage_clamp_XK1 = 0;

            this.excavation = 0; // разработка котлована под стойку
            this.soil_leveling = 0; // разравнивание грунта
            this.purchase_crushed_stone_sand_gravel_mixture = 0; // щебеночно-песчано-гравийная смесь
            this.purchase_concrete = 0; // бетон
            this.installation_of_metal_structures_in_concrete = 0; // установка металлоконструкций в бетоне

            this.digging_trenches = 0; // рытье траншеи
            this.ground_underlay = 0; // устройство постели из земли
            this.backfill = 0; // засыпка грунтом  
        }

        // если есть К
        if (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК' || sem.inputFromSem === '3фК') {

            if (sem.inputFromSem === 'КК') {
                this.dismantling_cable_from_pylon = 16; // демонтаж сущ кабеля
            } else {
                this.dismantling_cable_from_pylon = 8;	// демонтаж сущ кабеля			
            }

            if (sem.inputFromSem === 'КК' && sem.SEMType.split('-')[2] !== '1') {
                this.dismantling_metal_corner_from_pylon = 15.84; // демонтаж сущ уголка
            } else {
                this.dismantling_metal_corner_from_pylon = 11.17; // демонтаж сущ уголка
            }

            this.dismantling_metal_construction_from_pylon = 2.01; // демонтаж сущ металлоконструкций

            if (sem.inputFromSem === 'КК' && sem.SEMType.split('-')[2] == '2') {
                this.dismantling_clamp_ZOP = 8; // демонтаж зажимов ЗОПг-2
            } else if (sem.inputFromSem === 'КК' && sem.SEMType.split('-')[2] == '3') {
                this.dismantling_clamp_ZOP = 6;	// демонтаж зажимов ЗОПг-2			
            } else if (sem.inputFromSem === '1фК' || (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК'))) {
                this.dismantling_clamp_ZOP = 2;	// демонтаж зажимов ЗОПг-2			
            } else {
                this.dismantling_clamp_ZOP = 4;	// демонтаж зажимов ЗОПг-2			
            }
        } else {
            this.dismantling_cable_from_pylon = 0;
            this.dismantling_metal_corner_from_pylon = 0;
            this.dismantling_metal_construction_from_pylon = 0;
            this.dismantling_clamp_ZOP = 0;
        }

        //если есть 3фК
        if (sem.SEMType.split('-')[2] !== '1' &&
            (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '3фК')
        ) {
            if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'КК') {
                this.dismantling_INside_sleeve_4 = 2;
            } else {
                this.dismantling_INside_sleeve_4 = 1;
            }
        } else {
            this.dismantling_INside_sleeve_4 = 0;
        }

        //если есть 1фК
        if (sem.SEMType.split('-')[2] !== '2' &&
            (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК')
        ) {

            if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'КК') {
                this.dismantling_INside_sleeve_2 = 2;
            } else {
                this.dismantling_INside_sleeve_2 = 1;
            }
        } else {
            this.dismantling_INside_sleeve_2 = 0;
        }
    }
    // console.log(new SEMWORKS(input));
    return new SEMWORKS(input);
}

export default worksDataCollect;