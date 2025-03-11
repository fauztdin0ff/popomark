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

function updateBodyClass() {
   const hasActiveSubmenu = [...menuItems].some(item =>
      item.classList.contains('active') && item.querySelector('.menu__sublist')
   );
   document.body.classList.toggle('menu-opened', hasActiveSubmenu);
}

menuItems.forEach(item => {
   const subMenu = item.querySelector('.menu__sublist');
   let timeout;

   function handleMouseEnter() {
      if (!isDesktop() || !subMenu) return;
      clearTimeout(timeout);
      item.classList.add('active');
      updateBodyClass();
   }

   function handleMouseLeave() {
      if (!isDesktop() || !subMenu) return;
      timeout = setTimeout(() => {
         item.classList.remove('active');
         updateBodyClass();
      }, 100);
   }

   function handleClick(event) {
      if (isDesktop() || !subMenu) return;
      if (event.target.closest('.menu__sublist')) return;

      const isActive = item.classList.contains('active');
      menuItems.forEach(i => i.classList.remove('active'));

      if (!isActive) {
         item.classList.add('active');
      }

      updateBodyClass();
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
      updateBodyClass();
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
                  subitem.classList.add("active");
               });

               subitem.addEventListener("mouseleave", function () {
                  subsublist.classList.remove("open");
                  subitem.classList.remove("active");
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
   if (!table) return;

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
      if (!isTableVisible) return;

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

      tableBody.innerHTML = "";
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

      tableBody.innerHTML = "";
      rows.forEach(row => tableBody.appendChild(row));
   }

   function getProfitValue(row) {
      let profitCell = row.querySelector(".cell-profit");
      if (!profitCell) return 0;
      return parseInt(profitCell.textContent.replace(/\D/g, ""), 10);
   }

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

   const observer = new IntersectionObserver(
      ([entry]) => {
         toggleUpdateInterval(entry.isIntersecting);
      },
      { threshold: 0.1 }
   );

   observer.observe(table);
});


/*------------------------------
Faq
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const faqItems = document.querySelectorAll(".faq__item");

   if (faqItems.length === 0) return;

   faqItems.forEach((item) => {
      const question = item.querySelector(".faq__question");
      const icon = item.querySelector(".faq__item-icon");
      const answer = item.querySelector(".faq__answer");

      if (!question || !icon || !answer) return;

      const toggleFaqItem = () => {
         const isActive = item.classList.contains("active");

         faqItems.forEach((el) => {
            const elAnswer = el.querySelector(".faq__answer");
            if (elAnswer) {
               el.classList.remove("active");
               elAnswer.style.maxHeight = null;
            }
         });

         if (!isActive) {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
         }
      };

      question.addEventListener("click", toggleFaqItem);
      icon.addEventListener("click", toggleFaqItem);
   });
});


/*------------------------------
pagination list
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const activeElement = document.querySelector(".page-pagination-view-list-active");
   const sublist = document.querySelector(".page-pagination-view-sublist");
   const parent = document.querySelector(".page-pagination-view-list");

   if (!activeElement || !sublist || !parent) {
      return;
   }

   activeElement.addEventListener("click", function (event) {
      this.classList.toggle("active");
      sublist.classList.toggle("active");
      event.stopPropagation();
   });

   document.addEventListener("click", function (event) {
      if (!parent.contains(event.target)) {
         activeElement.classList.remove("active");
         sublist.classList.remove("active");
      }
   });
});


/*------------------------------
Back to top
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const backToTop = document.querySelector(".back-to-top");

   if (backToTop) {
      window.addEventListener("scroll", () => {
         backToTop.classList.toggle("visible", window.scrollY > 200);
      });

      backToTop.addEventListener("click", () => {
         window.scrollTo({ top: 0, behavior: "smooth" });
      });
   }
});


/*------------------------------
Article copy link
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const article = document.querySelector(".article__main-text");
   const toc = document.querySelector(".article__leftside-list");
   let isLastItemActive = false;

   if (article && toc) {
      toc.innerHTML = "";
      const headings = article.querySelectorAll("h2");
      const links = new Map();

      headings.forEach((heading, index) => {
         const anchor = `anchor-${index + 1}`;
         heading.id = anchor;

         // Создаем кнопку копирования ссылки
         const button = document.createElement("button");
         button.type = "button";
         button.classList.add("article__copy-link");
         button.setAttribute("aria-label", "Copy link");
         button.innerHTML = `
            <svg><use xlink:href="#icon-link"></use></svg>
            <span>Copied</span>
         `;
         heading.appendChild(button);

         // Извлекаем чистый текст заголовка
         const headingText = heading.cloneNode(true);
         headingText.querySelector(".article__copy-link")?.remove();
         const cleanText = headingText.textContent.trim();

         // Создаем элемент оглавления
         const li = document.createElement("li");
         const a = document.createElement("a");
         a.href = `#${anchor}`;
         a.classList.add("article__leftside-link");
         a.textContent = cleanText;
         li.appendChild(a);
         toc.appendChild(li);
         links.set(anchor, a);

         // Обработчик копирования ссылки
         button.addEventListener("click", () => {
            const url = `${window.location.origin}${window.location.pathname}#${anchor}`;
            navigator.clipboard.writeText(url)
               .then(() => {
                  button.classList.add("active");
                  setTimeout(() => {
                     button.classList.remove("active");
                  }, 1000);
               })
               .catch(err => console.error("Copy failed:", err));
         });
      });

      function updateActiveTocItem() {
         let activeAnchor = null;
         const scrollPosition = window.pageYOffset + window.innerHeight;

         for (let i = headings.length - 1; i >= 0; i--) {
            const rect = headings[i].getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.5) {
               activeAnchor = headings[i].id;
               break;
            }
         }
         links.forEach((link, id) => {
            const isActive = id === activeAnchor;
            link.classList.toggle("active", isActive);
         });

         // Логика для последнего элемента
         if (activeAnchor === headings[headings.length - 1]?.id) {
            if (!isLastItemActive) {
               links.get(activeAnchor)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest'
               });
               isLastItemActive = true;
            }
         }
      }

      let timeout;
      window.addEventListener("scroll", () => {
         clearTimeout(timeout);
         timeout = setTimeout(updateActiveTocItem, 100);
      });

      updateActiveTocItem();
   }
});


/*------------------------------
Table of contents
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const openBtn = document.querySelector(".article__leftside-open");
   const closeBtn = document.querySelector(".article__leftside-close");
   const leftsideBody = document.querySelector(".article__leftside-body");
   const body = document.body;

   if (!openBtn || !closeBtn || !leftsideBody) return;

   function openSidebar() {
      leftsideBody.classList.add("opened");
      body.classList.add("side-opened");
   }

   function closeSidebar() {
      leftsideBody.classList.remove("opened");
      body.classList.remove("side-opened");
   }

   openBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openSidebar();
   });

   closeBtn.addEventListener("click", closeSidebar);

   document.addEventListener("click", (e) => {
      if (!leftsideBody.contains(e.target) && !openBtn.contains(e.target)) {
         closeSidebar();
      }
   });
   leftsideBody.addEventListener("click", (e) => {
      if (e.target.closest("a, button")) {
         closeSidebar();
      }
   });
});

/*------------------------------
Go to top
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   let button = document.getElementById("goToTop");

   if (!button) return;

   button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
   });

});


/*------------------------------
Fixed panel in article
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const panel = document.querySelector(".article__fixed-panel");

   if (panel) {
      window.addEventListener("scroll", function () {
         if (window.scrollY >= 300) {
            panel.classList.add("show");
         } else {
            panel.classList.remove("show");
         }
      });
   }
});


/*------------------------------
Move authors
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const authors = document.querySelector(".article__rightside-authors");
   const authorsMob = document.querySelector(".article__authors-mob");
   const rightsideBody = document.querySelector(".article__rightside-body");

   function moveAuthors() {
      if (window.matchMedia("(max-width: 767px)").matches) {
         if (authors && authorsMob && !authorsMob.contains(authors)) {
            authorsMob.appendChild(authors);
         }
      } else {
         if (authors && rightsideBody && !rightsideBody.contains(authors)) {
            rightsideBody.appendChild(authors);
         }
      }
   }

   moveAuthors();
   window.addEventListener("resize", moveAuthors);
});

/*------------------------------
Share button   
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const shareButtons = document.querySelectorAll(".share-button");

   shareButtons.forEach(button => {
      button.addEventListener("click", () => {
         shareArticle();
      });
   });
});

function shareArticle() {
   if (navigator.share) {
      navigator.share({
         title: document.title,
         text: "Read this article!",
         url: window.location.href
      })
         .then(() => console.log("Share success"))
         .catch((error) => console.log("Error: ", error));
   } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
         alert("Link copied");
      }).catch((error) => {
         console.log("Error: ", error);
      });
   }
}

})();

/******/ })()
;