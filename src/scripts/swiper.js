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
  breakpoints: {
    320: {
      autoplay: {
        delay: 1,
      },
      noSwiping: false,
      speed: 250,
    },

    960: {
      autoplay: false,
      noSwiping: true,
      noSwipingClass: 'our-team__swiper-container',
      speed: 500,
    },
  },
  effect: 'fade',
  fadeEffect: { crossFade: true },
  loop: true,
  navigation: {
    nextEl: '.our-team__swiper-button-next',
    prevEl: '.our-team__swiper-button-prev',
  },
  noSwipingSelector: '.our-team__swiper-container',
  slideClass: 'our-team__swiper-slide',
  spaceBetween: 0,
});

const faqSwiper = new SwiperCore('.faq__swiper-container', {
  breakpoints: {
    320: {
      noSwiping: false,
      slidesPerView: 1,
    },

    960: {
      noSwiping: true,
      noSwipingClass: 'faq__swiper-container',
      slidesPerView: 4,
    },
  },
  loop: true,
  navigation: {
    nextEl: '.faq__swiper-button-next',
    prevEl: '.faq__swiper-button-prev',
  },
  slideClass: 'faq__swiper-slide',
});

export default {
  heroSwiper,
  teamSwiper,
  faqSwiper,
};
