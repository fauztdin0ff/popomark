/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".menu__body");
   const body = document.querySelector("body");
   const menuBodyClose = document.querySelector(".menu__body-close");

   if (menuIcon && menuBody) {
      // Открытие/закрытие меню по иконке
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      // Закрытие меню при клике на ссылку внутри меню
      /*       menuBody.addEventListener("click", function (event) {
               if (event.target.tagName === "A" || event.target.closest("a")) {
                  menuIcon.classList.remove("active");
                  menuBody.classList.remove("active");
                  body.classList.remove("no-scroll");
               }
            }); */

      // Закрытие меню при клике на кнопку закрытия
      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      // Закрытие меню при клике вне области меню
      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

/*------------------------------
Submenu
---------------------------*/
const menuItems = document.querySelectorAll('.menu__item');

function isDesktop() {
   return window.innerWidth > 1200;
}

menuItems.forEach(item => {
   const subMenu = item.querySelector('.menu__sublist');
   let timeout;

   function handleMouseEnter() {
      if (!isDesktop()) return;
      clearTimeout(timeout);
      item.classList.add('active');
   }

   function handleMouseLeave() {
      if (!isDesktop()) return;
      timeout = setTimeout(() => {
         item.classList.remove('active');
      }, 100);
   }

   function handleClick(event) {
      if (isDesktop()) return;
      if (event.target.closest('.menu__sublist')) return;
      if (item.classList.contains('active')) {
         item.classList.remove('active');
      } else {
         menuItems.forEach(i => i.classList.remove('active'));
         item.classList.add('active');
      }

      event.preventDefault();
   }

   item.addEventListener('mouseenter', handleMouseEnter);
   item.addEventListener('mouseleave', handleMouseLeave);
   item.addEventListener('click', handleClick);
});

document.addEventListener('click', (event) => {
   if (isDesktop()) return;

   const sublistRow = event.target.closest('.menu__sublist-row');
   if (sublistRow && event.target.tagName === 'P') {
      sublistRow.classList.toggle('open');
   }
});

function handleScroll() {
   if (isDesktop()) {
      menuItems.forEach(item => item.classList.remove('active'));
   }
}
window.addEventListener('scroll', handleScroll);

/*------------------------------
Move header controls
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const headerControlsWrap = document.querySelector(".header__controls-wrap");
   const headerControls = document.querySelector(".header__controls");
   const menuBody = document.querySelector(".menu__body");
   const headerMenu = document.querySelector(".header__menu");
   let resizeTimeout;

   function moveHeaderControls() {
      if (!headerControls || !headerControlsWrap || !menuBody || !headerMenu) {
         return;
      }

      if (window.innerWidth <= 1200) {
         if (!menuBody.contains(headerControls)) {
            menuBody.appendChild(headerControls);
         }
      } else {
         if (!headerControlsWrap.contains(headerControls)) {
            headerControlsWrap.appendChild(headerControls);
         }
      }
   }

   function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
         moveHeaderControls();
      }, 300);
   }
   moveHeaderControls();
   window.addEventListener("resize", handleResize);
});

/*------------------------------
Lang
---------------------------*/
function initLangDropdown(langButtonSelector, langListSelector) {
   const langButton = document.querySelector(langButtonSelector);
   const langList = document.querySelector(langListSelector);
   let hoverTimeout;

   if (langButton && langList) {
      langButton.addEventListener('mouseover', function () {
         clearTimeout(hoverTimeout);
         langButton.classList.add('active');
         langList.classList.add('active');
      });

      langButton.addEventListener('mouseout', function () {
         hoverTimeout = setTimeout(function () {
            langButton.classList.remove('active');
            langList.classList.remove('active');
         }, 300);
      });

      langButton.addEventListener('click', function (event) {
         event.stopPropagation();
         langButton.classList.toggle('active');
         langList.classList.toggle('active');
      });

      document.addEventListener('click', function (event) {
         if (!langButton.contains(event.target) && !langList.contains(event.target)) {
            langButton.classList.remove('active');
            langList.classList.remove('active');
         }
      });
   }
}

initLangDropdown('.header__lang', '.header__lang-list');
initLangDropdown('.footer__lang', '.footer__lang-list');

/*------------------------------
Brands carousel   
---------------------------*/
const brandsSlider = document.querySelector(".intro__brands-slider");

if (brandsSlider) {
   const brandsSwiper = new Swiper(brandsSlider, {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: true,
      freeMode: true,
      simulateTouch: false,
      slideToClickedSlide: false,
      speed: 5000,
      autoplay: {
         delay: 0,
         disableOnInteraction: false,
      },
   });
}

/*------------------------------
Steps slider
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const stepsSliderElement = document.querySelector(".steps__slider");
   const stepsItems = document.querySelectorAll(".steps__item");

   if (stepsSliderElement && stepsItems.length) {
      const stepsSwiper = new Swiper(stepsSliderElement, {
         direction: 'vertical',
         slidesPerView: 1,
         spaceBetween: 16,
         loop: false,
         parallax: true,
         freeMode: false,
         simulateTouch: false,
         slideToClickedSlide: false,
         speed: 1000,
         /*  effect: "creative",
          creativeEffect: {
             prev: {
                shadow: false,
                origin: "left center",
                translate: ["-5%", 0, -200],
                rotate: [0, 100, 0],
                opacity: 0.1
             },
             next: {
                origin: "right center",
                translate: ["5%", 0, -200],
                rotate: [0, -100, 0],
                opacity: 0.01
             },
          }, */
         effect: "cube",
         cubeEffect: {
            shadow: false,
            slideShadows: false,
            shadowOffset: 20,
            shadowScale: 0.1,
         },
         on: {
            slideChange: () => {
               updateSteps(stepsSwiper.realIndex);
            }
         }
      });

      let currentStep = 0;

      stepsItems.forEach((item, index) => {
         if (index > 1) item.classList.add("blocked");
      });

      stepsItems.forEach((item, index) => {
         item.addEventListener("click", () => {
            if (index === currentStep + 1 || index <= currentStep) {
               stepsSwiper.slideTo(index);
            }
         });
      });

      function updateSteps(activeIndex) {
         currentStep = activeIndex;
         stepsItems.forEach((el, i) => {
            el.classList.toggle("active", i <= currentStep);
            el.classList.toggle("blocked", i > currentStep + 1);
         });
      }
   }
});


/*------------------------------
Calendar carousel   
------------------------------*/
const calendarSliders = document.querySelectorAll(".calendar__slider");
let calendarSwipers = new Map();
let resizeTimeout;

function initCalendarSliders() {
   calendarSliders.forEach((slider) => {
      if (window.innerWidth >= 980) {
         if (!calendarSwipers.has(slider)) {
            const swiper = new Swiper(slider, {
               slidesPerView: "auto",
               spaceBetween: 12,
               loop: false,
               freeMode: false,
               simulateTouch: true,
               slideToClickedSlide: true,
               speed: 800,
            });
            calendarSwipers.set(slider, swiper);
         }
      } else {
         if (calendarSwipers.has(slider)) {
            calendarSwipers.get(slider).destroy(true, true);
            calendarSwipers.delete(slider);
         }
      }
   });
}

function debounce(func, delay) {
   return function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(func, delay);
   };
}

initCalendarSliders();
window.addEventListener("resize", debounce(initCalendarSliders, 200));


/*------------------------------
Footer sublist
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuItems = document.querySelectorAll(".footer__menu-item");

   function isTouchDevice() {
      return "ontouchstart" in window || navigator.maxTouchPoints;
   }

   menuItems.forEach((item) => {
      const link = item.querySelector(".footer__menu-add");
      const sublist = item.querySelector(".footer__sublist");

      if (!link || !sublist) return;

      link.addEventListener("click", function (e) {
         e.preventDefault();
      });

      if (isTouchDevice()) {
         link.addEventListener("click", function (e) {
            e.preventDefault();
            const isOpen = sublist.classList.contains("open");
            document.querySelectorAll(".footer__sublist.open").forEach((el) => {
               if (el !== sublist) {
                  el.classList.remove("open");
                  el.closest(".footer__menu-item")?.classList.remove("active");
               }
            });

            if (isOpen) {
               sublist.classList.remove("open");
               item.classList.remove("active");
            } else {
               sublist.classList.add("open");
               item.classList.add("active");
            }
         });

         document.addEventListener("click", function (event) {
            if (!item.contains(event.target)) {
               sublist.classList.remove("open");
               item.classList.remove("active");
            }
         });

         // Поддержка субсубменю (третьего уровня)
         sublist.querySelectorAll(".footer__sublink-add").forEach((sublink) => {
            const subitem = sublink.closest(".footer__subitem");
            const subsublist = sublink.nextElementSibling;

            if (subsublist && subsublist.classList.contains("footer__subsublist")) {
               sublink.addEventListener("click", function (e) {
                  e.preventDefault();
                  const isSubOpen = subsublist.classList.contains("open");

                  document.querySelectorAll(".footer__subsublist.open").forEach((el) => {
                     if (!el.closest(".footer__subitem").contains(subsublist)) {
                        el.classList.remove("open");
                        el.closest(".footer__subitem")?.classList.remove("active");
                     }
                  });

                  if (isSubOpen) {
                     subsublist.classList.remove("open");
                     subitem.classList.remove("active");
                  } else {
                     subsublist.classList.add("open");
                     subitem.classList.add("active");
                  }
               });
            }
         });
      } else {
         item.addEventListener("mouseenter", function () {
            sublist.classList.add("open");
            item.classList.add("active");
         });

         item.addEventListener("mouseleave", function () {
            sublist.classList.remove("open");
            item.classList.remove("active");
         });

         sublist.querySelectorAll(".footer__subitem").forEach((subitem) => {
            const sublink = subitem.querySelector(".footer__sublink-add");
            const subsublist = subitem.querySelector(".footer__subsublist");

            if (sublink && subsublist) {
               subitem.addEventListener("mouseenter", function () {
                  subsublist.classList.add("open");
                  subitem.classList.add("active"); // Добавляем класс active к .footer__subitem
               });

               subitem.addEventListener("mouseleave", function () {
                  subsublist.classList.remove("open");
                  subitem.classList.remove("active"); // Убираем класс active
               });
            }
         });
      }
   });
});


/*------------------------------
Table
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const table = document.querySelector(".leaderboard__table");
   if (!table) return; // 💡 Если таблицы нет, код дальше не выполняется

   const tableBody = table.querySelector("tbody");
   let isTableVisible = false;
   let updateInterval = null;

   async function loadNewUsers() {
      try {
         const response = await fetch("users.json");
         if (!response.ok) throw new Error("Ошибка загрузки JSON");
         return await response.json();
      } catch (error) {
         console.error("Ошибка загрузки пользователей:", error);
         return [];
      }
   }

   async function updateLeaderboard() {
      if (!isTableVisible) return; // Обновление только если таблица видима

      let rows = Array.from(tableBody.querySelectorAll("tr"));

      if (rows.length > 7) {
         while (rows.length > 7) {
            tableBody.removeChild(rows.pop());
         }
      }

      const positions = rows.map(row => row.getBoundingClientRect().top);

      rows.forEach(row => {
         updateProfit(row);
         updateTimeAndDate(row);
      });

      if (Math.random() < 0.33) {
         const newUsers = await loadNewUsers();
         if (newUsers.length > 0) {
            replaceLastUser(newUsers);
         }
      }

      rows = Array.from(tableBody.querySelectorAll("tr"));
      rows.sort((a, b) => getProfitValue(b) - getProfitValue(a));

      rows.forEach((row, index) => {
         row.cells[0].textContent = index + 4;
      });

      tableBody.innerHTML = ""; // Очищаем таблицу перед добавлением отсортированных строк
      rows.forEach(row => tableBody.appendChild(row));

      rows.forEach((row, index) => {
         const newPosition = row.getBoundingClientRect().top;
         const delta = positions[index] - newPosition;

         row.style.transform = `translateY(${delta}px)`;
         row.style.transition = "none";

         requestAnimationFrame(() => {
            requestAnimationFrame(() => {
               row.style.transition = "transform 0.5s ease-in-out";
               row.style.transform = "";
            });
         });
      });
   }

   function updateProfit(row) {
      let profitCell = row.querySelector(".cell-profit");
      if (!profitCell) return;
      let currentProfit = getProfitValue(row);
      let change = Math.floor(Math.random() * 500) * (Math.random() > 0.5 ? 1 : -1);
      let newProfit = Math.max(1000, currentProfit + change);
      profitCell.textContent = `+$${newProfit.toLocaleString()}`;
   }

   function updateTimeAndDate(row) {
      let timeCell = row.cells[3];
      let dateCell = row.cells[4];

      if (!timeCell || !dateCell) return;

      let now = new Date();
      let minutesAgo = Math.floor(Math.random() * 3) + 1;
      now.setMinutes(now.getMinutes() - minutesAgo);

      let formattedTime = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
      let formattedDate = now.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });

      timeCell.textContent = formattedTime;
      dateCell.textContent = formattedDate;
   }

   function replaceLastUser(newUsers) {
      let rows = Array.from(tableBody.querySelectorAll("tr"));

      if (rows.length >= 7) {
         let lastRow = rows[rows.length - 1];
         lastRow.style.opacity = "0";
         lastRow.style.transition = "opacity 0.5s";

         setTimeout(() => {
            lastRow.remove();
            addNewUser(newUsers);
         }, 500);
      } else {
         addNewUser(newUsers);
      }
   }

   function addNewUser(newUsers) {
      let newUser = newUsers[Math.floor(Math.random() * newUsers.length)];

      let newRow = document.createElement("tr");
      newRow.innerHTML = `
     <td></td>
     <td class="cell-with-image">
         <div class="cell-flex">
             <img src="${newUser.img}" alt="">
             <div class="cell-text">
                 <p>${newUser.name}</p>
                 <span>${newUser.country}</span>
             </div>
         </div>
     </td>
     <td class="cell-with-image">
         <div class="cell-flex">
             <img src="${newUser.assetImg}" alt="">
             <div class="cell-text">
                 <p>${newUser.asset}</p>
                 <span>${newUser.assetType}</span>
             </div>
         </div>
     </td>
     <td></td>
     <td></td>
     <td class="cell-${newUser.buySell.toLowerCase()}">
         <span>
             <svg>
                 <use xlink:href="#icon-arrow-up"></use>
             </svg>
             ${newUser.buySell}
         </span>
     </td>
     <td class="cell-profit">+$${newUser.profit.toLocaleString()}</td>
   `;

      if (newRow.cells.length < 7) {
         console.error("Неверная структура новой строки:", newRow);
         return;
      }

      updateTimeAndDate(newRow);

      let rows = Array.from(tableBody.querySelectorAll("tr"));
      rows.push(newRow);
      rows.sort((a, b) => getProfitValue(b) - getProfitValue(a));

      rows.forEach((row, index) => {
         row.cells[0].textContent = index + 4;
      });

      tableBody.innerHTML = ""; // Очищаем таблицу перед добавлением отсортированных строк
      rows.forEach(row => tableBody.appendChild(row));
   }

   function getProfitValue(row) {
      let profitCell = row.querySelector(".cell-profit");
      if (!profitCell) return 0;
      return parseInt(profitCell.textContent.replace(/\D/g, ""), 10);
   }

   // 📌 Функция для старта/остановки интервала
   function toggleUpdateInterval(visible) {
      isTableVisible = visible;
      if (visible) {
         if (!updateInterval) {
            updateInterval = setInterval(updateLeaderboard, Math.random() * (4000 - 2000) + 2000);
         }
      } else {
         clearInterval(updateInterval);
         updateInterval = null;
      }
   }

   // 👀 Создаем IntersectionObserver
   const observer = new IntersectionObserver(
      ([entry]) => {
         toggleUpdateInterval(entry.isIntersecting);
      },
      { threshold: 0.1 }
   );

   // Отслеживаем таблицу
   observer.observe(table);
});

})();

/******/ })()
;