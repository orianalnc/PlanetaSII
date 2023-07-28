"use strict";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Aos from "aos";


Aos.init();


const swiper = new Swiper(".welcome_planeta__slider", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 1,

  //loop: true,
  //speed: 500,
  //autoHeight: false,

  /*pagination: {
                  el: '.swiper-pagination',
              },*/
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
