// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение из node_modules
import tippy from "tippy.js";

import "../../scss/base/tippy.scss";

// Запускаем и добавляем в объект модулей
flsModules.tippy = tippy("[data-tippy-content]", {});
