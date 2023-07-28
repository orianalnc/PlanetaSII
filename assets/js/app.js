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


//


function searchFilterCurso(){
    let selectedCurso = document.getElementById("filterbyCurso").value;
    let selectedAsignatura = document.getElementById("filterbyAsignatura").value;
    let selectedOA = document.getElementById("filterbyAo").value;
    console.log(selectedCurso, selectedAsignatura, selectedOA);
    const input = document.querySelector(".form-select");
    const cards = document.getElementsByClassName("fichas_docentes__contenidos_card");
    console.log(cards[1])
    //let textBox = input.value;
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card");
        if ((cards[i].classList.contains(selectedCurso) || selectedCurso == "") && (cards[i].classList.contains(selectedAsignatura) || selectedAsignatura == "") && (cards[i].classList.contains(selectedOA) || selectedOA == "")  ) {
            cards[i].classList.remove("d-none");
        } else {
            cards[i].classList.add("d-none");
        }
    }
}



