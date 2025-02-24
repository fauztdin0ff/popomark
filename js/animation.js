
/*------------------------------
Preloader
---------------------------*/
window.addEventListener("load", function () {
   const preloader = document.getElementById("preloader");
   const minTime = 1000;
   const startTime = performance.now();

   const hidePreloader = () => {
      preloader.style.display = "none";
      initAnimations();
   };

   const elapsedTime = performance.now() - startTime;
   if (elapsedTime < minTime) {
      setTimeout(hidePreloader, minTime - elapsedTime);
   } else {
      hidePreloader();
   }
});

let resizeTimeout;
function debounce(func, delay) {
   return function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(func, delay);
   };
}


/*------------------------------
MAIN ANIMATIONS
---------------------------*/
function initAnimations() {

   gsap.registerPlugin(ScrollTrigger);
   gsap.registerPlugin(SplitText);


   const tl = gsap.timeline({
      scrollTrigger: {
         trigger: ".intro",
         start: "top 50%",
         toggleActions: "play none none none"
      }
   });

   tl.from(".intro__title", { opacity: 0, y: 50, duration: 1, ease: "power2.out" })
   tl.from(".intro__subtitle", { opacity: 0, y: 20, duration: 1, ease: "power2.out" }, "-=0.5")
      .from('.intro__rules', { opacity: 0 })


   const numberAnimations = [];
   document.querySelectorAll(".intro__rule-value span").forEach((el) => {
      const targetValue = parseInt(el.innerText.replace(/\D/g, ""), 10);

      const anim = gsap.to(el, {
         duration: 2,
         ease: "power1.out",
         onUpdate: function () {
            const progress = this.progress();
            const currentValue = Math.floor(progress * targetValue);
            el.innerText = currentValue;
         }
      });

      numberAnimations.push(anim);
   });

   tl.add(numberAnimations, "-=0.6");

   gsap.from(".pedestal__number", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
         trigger: ".pedestal",
         start: "top 40%",
         toggleActions: "play none none none"
      }
   });

   gsap.from(".testimonials__item", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
         trigger: ".testimonials__item",
         start: "top 60%",
         toggleActions: "play none none none"
      }
   });

   gsap.from(".start__item", {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.5,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
         trigger: ".start__items",
         start: "top 60%",
         toggleActions: "play none none none"
      }
   });

   /*------------------------------
   ANIMATION INFOGRAPHIC
   ---------------------------*/

   const textElement = document.querySelector('.features__block-2 .infographic__alert-message span');
   const split = new SplitText(textElement, { type: "chars" });
   const textElement2 = document.querySelector('.depozit__enter-input-p');
   const split2 = new SplitText(textElement2, { type: "chars" });
   const textElement3 = document.querySelector('.pie-chart__name');
   const split3 = new SplitText(textElement3, { type: "chars" });
   /*------------------------------
   Anim group 1
   ---------------------------*/
   const tl1 = gsap.timeline({
      scrollTrigger: {
         trigger: ".features__block-1",
         start: "top 50%",
         toggleActions: "play reverse play reverse"
      }
   });
   tl1.from(".features__block-1", {
      opacity: 0,
      y: 50,
      duration: 1
   })

      .from('.features__block-1 .infographic__card-1', { x: 250, duration: 1.5, opacity: 0, })
      .to(".features__block-1 .infographic__alert-name-icon", { animation: 'bell 1.8s linear 0s' },)
      .from('.features__block-1 .infographic__card-3', { y: 100, opacity: 0, duration: 1.6, ease: 'back.out(1.7)', }, "-=2")
      .to(".average__image-chart path", { strokeDashoffset: 0, duration: 3, ease: 'power0' }, '<')
      .from(".features__block-1 .subtitle", { opacity: 0, x: -50, duration: 0.6 }, "<")
      .from(".features__block-1 .features__text-link", { opacity: 0, x: -50, duration: 0.6 }, "<")
      .fromTo(".features__block-1 .cursor",
         { opacity: 0, x: -50 },
         { opacity: 1, x: 50, duration: 1, ease: 'power0', }, '-=2')
      .to(".features__block-1 .cursor", { opacity: 1, x: 50, y: 84, duration: 1, delay: 0, ease: 'power0', }, '-=1.0')
      .to(".features__block-1 .cursor", { opacity: 0, scale: 0.2, duration: 0.2, })
      .fromTo(".indicators__link-3",
         { scale: 1 },
         { scale: 1.05, duration: 0.2, ease: 'power0' }, "<"
      )
      .to(".indicators__link-3", { background: '#f9be08', duration: 0.2 }, "<")
      .to(".indicators__link-3", { scale: 1, duration: 0.2, ease: 'power0' }, "-=0.1")
      .to(".infographic__card-2 .indicators__title", { y: -15, opacity: 0, duration: 0.3, delay: 0.5, ease: 'power0' }, "-=0.3")
      .to(".indicators__link", { y: 15, opacity: 0, duration: 0.3, stagger: 0.1, ease: 'power0' }, "<")
      .to(".fibonacci", { opacity: 1, }, "<")
      .fromTo(".infographic__card-2 .fibonacci .indicators__title",
         { opacity: 0, y: -25, },
         { opacity: 1, y: 0, duration: 0.3, ease: 'power0' }
      )
      .fromTo(".fibonacci__item-name",
         { y: 25, opacity: 0, },
         { y: 0, opacity: 1, duration: 0.3, ease: 'power0' }
      )
      .fromTo(".fibonacci__item-img",
         { opacity: 0, scale: 0.9, },
         { opacity: 1, scale: 1, duration: 1.5, ease: 'power0' }
      )

   /*------------------------------
   Anim group 2
   ---------------------------*/
   const tl2 = gsap.timeline({
      scrollTrigger: {
         trigger: ".features__block-2",
         start: "top 50%",
         toggleActions: "play reverse play reverse"
      }
   });

   tl2.from(".features__block-2", {
      opacity: 0,
      y: 50,
      duration: 1,
   })
      .from('.features__block-2 .infographic__card-1', { x: -250, opacity: 0, duration: 1.5 })
      .to(".features__block-2 .infographic__alert-name-icon", { animation: 'scaled 1.8s ease 0s' },)
      .from('.features__block-2 .infographic__card-3', { y: 100, opacity: 0, duration: 1.6, ease: 'back.out(1.7)', }, "-=2")
      .fromTo(split.chars,
         { opacity: 0 },
         { opacity: 1, duration: 0.05, stagger: 0.05, ease: "power1.out" }, "-=1"
      )
      .to('.features__block-2 .sl-tp__image-cover', { x: '100%', duration: 4, ease: "cubic-bezier(0.25, 1, 0.5, 1)", }, "-=3")
      .from('.sl-tp__label', { opacity: 0, y: 5, delay: 0.5, stagger: 0.7, duration: 0.2 }, "<")
      .to('.moving-cell', { y: '-100%', background: '#00916d', duration: 0.5, stagger: 0.2, ease: 'power0' }, "<")
      .to('.moving-cell span', { opacity: 1, duration: 0.5, stagger: 0.4, ease: 'power0' }, "<")

   /*------------------------------
   Anim group 3
   ---------------------------*/
   const tl3 = gsap.timeline({
      scrollTrigger: {
         trigger: ".features__block-3",
         start: "top 50%",
         toggleActions: "play reverse play reverse"
      }
   });

   tl3.from(".features__block-3", {
      opacity: 0,
      y: 50,
      duration: 1
   })
      .to(".infographic-3 .cursor", {
         x: window.innerWidth < 767 ? "15vw" : "5vw",
         opacity: 1,
         duration: 0.6,
         ease: 'power0'
      })
      .to(".infographic-3 .cursor", {
         y: window.innerWidth < 767 ? "300%" : "380%",
         duration: 1,
         ease: 'power0'
      })

      .to(".infographic-3 .cursor", {
         y: window.innerWidth < 767 ? "100%" : "171%",
         delay: 0.1,
         duration: 0.6,
         ease: 'power0'
      })

      .to(".infographic-3 .cursor", { opacity: 0, scale: 0.2, duration: 0.2 })
      .fromTo(".founding__option-sel",
         { scale: 1 },
         { scale: 0.9, duration: 0.2, ease: 'power0' }, "<"
      )
      .to(".founding__option-sel", { background: '#f9be08', duration: 0.2 }, "<")
      .to(".founding__option-sel", { scale: 1, duration: 0.2, ease: 'power0' }, "-=0.1")
      .to(".infographic-3 .cursor", { opacity: 1, scale: 1, duration: 0.2, }, "<")
      .to(".infographic-3 .cursor", {
         x: window.innerWidth < 767 ? "-215" : window.innerWidth < 980 ? "-170" : "-207",
         y: window.innerWidth < 767 ? "-140" : "-113",
         opacity: 1,
         duration: 1.2,
         ease: 'power0'
      })

      .to(".infographic-3 .cursor", { opacity: 0, scale: 0.2, duration: 0.2, delay: 0.5, }, "-=0.3")
      .fromTo(".depozit__button-sel",
         { scale: 1 },
         { scale: 0.9, duration: 0.2, ease: 'power0' }, "<"
      )
      .to(".depozit__button-sel", { background: '#f9be08', duration: 0.2 }, "<")
      .to(".depozit__button-sel", { scale: 1, duration: 0.2, ease: 'power0' }, "-=0.1")

      //Смена
      .to(".depozit__history-item", { y: 10, opacity: 0, duration: 0.2, stagger: 0.1, ease: 'power0' })
      .to(".depozit__history-title", { y: 10, opacity: 0, duration: 0.2, ease: 'power0' })
      .to('.depozit__enter', { opacity: 1, duration: 0 })
      .from(".depozit__enter-title", { y: -10, duration: 0.2, ease: 'power0' })
      .from(".depozit__enter-input", { y: 10, opacity: 0, duration: 0.2, ease: 'power0' })
      .from(".depozit__enter-submit", { y: 10, opacity: 0, duration: 0.2, ease: 'power0' })

      .to(".infographic-3 .cursor", { opacity: 1, scale: 1, duration: 0, },)
      .to(".depozit__button-sel", { background: '#f9f8f4', duration: 0 }, "<")
      .to(".infographic-3 .cursor", {
         y: window.innerWidth < 767 ? -37 : -9,
         duration: 1,
      })

      .fromTo(split2.chars,
         { opacity: 0 },
         { opacity: 1, duration: 0.05, stagger: 0.05, delay: 0.2, ease: "power1.out" }
      )
      .to(".infographic-3 .cursor", {
         x: -128,
         y: window.innerWidth < 767 ? 5 : 29,
         duration: 0.5,
      })

      .fromTo(".depozit__enter-submit",
         { scale: 1 },
         { scale: 0.9, duration: 0.2, ease: 'power0' },
      )
      .to(".depozit__enter-submit", { background: '#f9be08', duration: 0.2 }, "<")
      .to(".depozit__enter-submit", { scale: 1, duration: 0.2, ease: 'power0' }, "-=0.1")

      //конец сцены
      .fromTo('.features__block-3 .infographic__card-1',
         { opacity: 0, x: 200, },
         { opacity: 1, x: 50, duration: 1.5, ease: 'back.out(1.7)' })
      .to('.depozit__alert', { y: 0, duration: 1 }, '<')
      .to({ value: 10 }, {
         value: 22,
         duration: 1.6,
         ease: "power1.out",
         onUpdate: function () {
            document.querySelector('.depozit__summ-value').textContent = Math.round(this.targets()[0].value);
         }
      })
      .to('.depozit__alert', { opacity: 0, duration: 1 },)

   /*------------------------------
   Anim group 4
   ---------------------------*/
   const tl4 = gsap.timeline({
      scrollTrigger: {
         trigger: ".features__block-4",
         start: "top 50%",
         toggleActions: "play reverse play reverse"
      }
   });
   tl4.from(".features__block-4", {
      opacity: 0,
      y: 50,
      duration: 1
   })
      .fromTo(split3.chars,
         { opacity: 0 },
         { opacity: 1, duration: 0.1, stagger: 0.1, delay: 0.2, ease: "power1.out" }
      )
      .from('.summary__item', { y: -10, opacity: 0, stagger: 0.4, duration: 0.4, })
      .from(".infographic-4  .infographic__card-1", { opacity: 0, x: -250, duration: 0.6, ease: 'power0', }, "-=1")
      .from(".pie-chart__image", { opacity: 0, rotate: 90, duration: 1, }, "-=0.5")
      .from(".pie-arrow", { opacity: 0, stagger: 0.1, duration: 0.2 })
      .from(".label-1", { opacity: 0, duration: 0.2 })
      .from(".label-2", { opacity: 0, duration: 0.2 })
      .from(".label-3", { opacity: 0, duration: 0.2 })
      .from(".label-4", { opacity: 0, duration: 0.2 })
      .from(".label-5", { opacity: 0, duration: 0.2 })
      .from(".label-6", { opacity: 0, duration: 0.2 })
      .from(".label-7", { opacity: 0, duration: 0.2 })
      .from(".label-8", { opacity: 0, duration: 0.2 })
      .from(".label-9", { opacity: 0, duration: 0.2 })
      .from(".label-10", { opacity: 0, duration: 0.2 });

   window.addEventListener("resize", debounce(() => {
      ScrollTrigger.refresh();
   }, 200));

   window.addEventListener("load", function () {
      ScrollTrigger.refresh();
   });
}