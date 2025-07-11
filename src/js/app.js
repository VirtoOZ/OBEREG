// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

//<Функционал>=================================
import * as flsFunctions from "./files/functions.js";

/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();

//</Табы>=================================
flsFunctions.tabs();

//<Swiper>=================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация плагина: https://swiperjs.com/
*/
import "./files/sliders.js";

//<Галерея>=================================
/*
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
import "./files/gallery.js";

//<Динамический адаптив>=================================
import "./libs/dynamic_adapt.js";

//<Подключение кода>=================================
import "./files/script.js";
//=================================