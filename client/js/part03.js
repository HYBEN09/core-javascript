const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

//*-----------------------------------------------------------------------
// eslint-disable-next-line no-undef
const swiper = new Swiper(".swiper", {
  autoplay: true,
  loop: true,

  speed: 2000,

  parallax: true,

  keyboard: {
    enabled: true,
  },

  mousewheel: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  pagination: {
    //? class 이름 바꾸기
    // el: ".swiper-pagination",
    el: ".pagination",

    clickable: true,
    bulletClass: "bullet",
    bulletActiveClass: "is-active",

    renderBullet: function (index, className) {
      return /* html */ `
        <span class="${className}">
          <img src="./assets/part01/${data[index].src}" alt="${data[index].alt}" />
        </span>
      `;
    },
  },
});
