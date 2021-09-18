
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper_df", {
  direction: "vertical",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper3", {
  effect: "flip",
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var el = document.querySelector('.artesanal');
anime({
  targets: [el, '.artesanal'],
  translateY: -20,
  duration:5000,
  delay: 500,
  opacity: [0,1],
});

var el = document.querySelector('.hipo');
anime({
  targets: [el, '.hipo'],
  translateY: -20,
  duration:5000,
  delay:1000,
  opacity: [0,2],
});

var el = document.querySelector('.term');
anime({
  targets: [el, '.term'],
  translateY: -20,
  duration:5000,
  delay:2000,
  opacity: [0,2],
});

var el = document.querySelector('.lige');
anime({
  targets: [el, '.lige'],
  translateY: -20,
  duration:5000,
  delay:3000,
  opacity: [0,2],
});

var el = document.querySelector('.res');
anime({
  targets: [el, '.res'],
  translateY: -20,
  duration:5000,
  delay:4000,
  opacity: [0,2],
});

var el = document.querySelector('.mal');
anime({
  targets: [el, '.mal'],
  translateY: -20,
  duration:5000,
  delay:5000,
  opacity: [0,1],
});

