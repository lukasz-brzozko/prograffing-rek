// import Swiper from 'swiper';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Autoplay]);

const swiper = new SwiperCore('.swiper-container', {
  spaceBetween: 200,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});

export default swiper;
