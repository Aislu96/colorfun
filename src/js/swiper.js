/* eslint-disable */
import Swiper from "swiper";
import { Pagination, Scrollbar } from "swiper/modules";

document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth <= 800) {
    new Swiper(".swiper-container", {
      modules: [Pagination, Scrollbar],
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: '.pagination',
        clickable: true,
        renderBullet: function (index, className) {
          if (index < 4) {
            return '<span class="' + className + '"></span>';
          } else {
            return '';
          }
        },
      }
    });
  }
});
