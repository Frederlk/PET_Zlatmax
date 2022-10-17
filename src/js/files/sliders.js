import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs } from "swiper";

// Базовые стили
import "../../scss/base/swiper.scss";

// Инициализация слайдеров
function initSliders() {
    if (document.querySelector(".main-block__slider")) {
        new Swiper(".main-block__slider", {
            modules: [Navigation, Pagination, Parallax, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 50,
            parallax: true,
            speed: 800,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".controll-main-block__dotts",
                clickable: true,
            },
            on: {
                init: function (swiper) {
                    const allSlides = document.querySelector(".fraction-controll__all");
                    const allSlidesItems = document.querySelectorAll(
                        ".slide-main-block:not(.swiper-slide-duplicate)"
                    );
                    allSlides.innerHTML =
                        allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
                },
                slideChange: function (swiper) {
                    const currentSlide = document.querySelector(".fraction-controll__current");
                    currentSlide.innerHTML =
                        swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
                },
            },
        });
    }

    if (document.querySelector(".products-slider__swiper_hits")) {
        new Swiper(".products-slider__swiper_hits", {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 30,
            watchOverflow: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".products-slider__dotts_hits",
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                660: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1370: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }

    if (document.querySelector(".products-new__swiper")) {
        new Swiper(".products-new__swiper", {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 30,
            watchOverflow: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".products-new__dotts",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                660: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1100: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
    }

    if (document.querySelector(".products-slider__swiper_actions")) {
        new Swiper(".products-slider__swiper_actions", {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 30,
            watchOverflow: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".products-slider__dotts_actions",
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                660: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1370: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }

    if (document.querySelector(".products-slider__swiper_flashlights")) {
        new Swiper(".products-slider__swiper_flashlights", {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 30,
            watchOverflow: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".products-slider__dotts_flashlights",
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                660: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1370: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }

    if (document.querySelector(".products-slider__swiper_flashlights")) {
        new Swiper(".products-slider__swiper_flashlights", {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 30,
            watchOverflow: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".products-slider__dotts_flashlights",
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                660: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1370: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }

    if (document.querySelector(".products-slider__swiper_same")) {
        new Swiper(".products-slider__swiper_same", {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 30,
            watchOverflow: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".products-slider__dotts_same",
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                660: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1370: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }
    if (document.querySelector(".products-slider__swiper_recommended")) {
        new Swiper(".products-slider__swiper_recommended", {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 30,
            watchOverflow: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".products-slider__dotts_recommended",
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                660: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1370: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }

    if (document.querySelector(".images-product")) {
        const thumbsImages = new Swiper(".thumbs-images__thumbs", {
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 15,
            watchOverflow: true,
            speed: 800,
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                479.98: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },

                991.98: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
            },
        });

        new Swiper(".images-product__main", {
            modules: [Thumbs],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 30,
            watchOverflow: true,
            speed: 800,
            thumbs: {
                swiper: thumbsImages,
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
