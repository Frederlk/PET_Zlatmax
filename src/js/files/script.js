// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей

document.addEventListener("click", documentActions);

const menuBlocks = document.querySelectorAll(".sub-menu-catalog__block");
if (menuBlocks.length) {
    menuBlocks.forEach((block) => {
        const menuBlockItems = block.querySelectorAll(".sub-menu-catalog__category").length;
        block.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
    });
}

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest("[data-parent]")) {
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);

        if (subMenu) {
            const activeLink = document.querySelector("._sub-menu-active");
            const activeBlock = document.querySelector("._sub-menu-open");

            if (activeLink && activeLink !== targetElement) {
                activeLink.classList.remove("_sub-menu-active");
                activeBlock.classList.remove("_sub-menu-open");
                document.documentElement.clientWidth < 991.98 &&
                    document.documentElement.classList.remove("_sub-menu-open");
            }

            document.documentElement.clientWidth < 991.98 &&
                document.documentElement.classList.toggle("_sub-menu-open");
            targetElement.classList.toggle("_sub-menu-active");
            subMenu.classList.toggle("_sub-menu-open");
        } else {
            console.log("Такого подменю нет");
        }
        e.preventDefault();
    }

    if (targetElement.closest(".menu-top-header__link_catalog")) {
        e.preventDefault();
        document.documentElement.classList.add("catalog-open");
    }

    if (targetElement.closest(".menu-catalog__back")) {
        e.preventDefault();
        document.documentElement.classList.remove("catalog-open");
        document.querySelector("._sub-menu-active")
            ? document.querySelector("._sub-menu-active").classList.remove("_sub-menu-active")
            : null;
        document.querySelector("._sub-menu-open")
            ? document.querySelector("._sub-menu-open").classList.remove("_sub-menu-open")
            : null;
    }

    if (targetElement.closest(".sub-menu-catalog__back")) {
        e.preventDefault();
        document.documentElement.classList.remove("_sub-menu-open");
        document.querySelector("._sub-menu-active")
            ? document.querySelector("._sub-menu-active").classList.remove("_sub-menu-active")
            : null;
        document.querySelector("._sub-menu-open")
            ? document.querySelector("._sub-menu-open").classList.remove("_sub-menu-open")
            : null;
    }

    if (
        targetElement.closest(".actions-product__tip") &&
        !targetElement.closest(".actions-product__tip-blanket")
    ) {
        if (isMobile.any()) {
            targetElement.closest(".actions-product__tip").classList.toggle("_active");
        }
    }
    if (!targetElement.closest(".actions-product__tip")) {
        const tip = document.querySelector(".actions-product__tip");
        if (isMobile.any() && tip && tip.classList.contains("_active")) {
            tip.classList.remove("_active");
        }
    }
}
