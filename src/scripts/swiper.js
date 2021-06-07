// import Swiper from 'swiper';
import SwiperCore, {
  Autoplay, EffectFade, Navigation,
} from 'swiper/core';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay, EffectFade, Navigation]);

const heroSwiper = new SwiperCore('.hero__swiper-container', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  navigation: {
    nextEl: '.hero__swiper-button-next',
    prevEl: '.hero__swiper-button-prev',
  },
  spaceBetween: 200,
});

const teamSwiper = new SwiperCore('.our-team__swiper-container', {
  slideClass: 'our-team__swiper-slide',
  loop: true,
  speed: 500,
  noSwipingSelector: '.our-team__swiper-container',
  noSwiping: true,
  preventClicks: false,
  preventClicksPropagation: false,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  navigation: {
    nextEl: '.our-team__swiper-button-next',
    prevEl: '.our-team__swiper-button-prev',
  },
  spaceBetween: 0,
});

console.log(heroSwiper, teamSwiper);
