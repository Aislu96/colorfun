/* eslint-disable */
import Swiper from "swiper";
import { Pagination, Scrollbar, Thumbs } from "swiper/modules";

document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth <= 800) {
    new Swiper(".swiper-info", {
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
document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper for thumbnails (gallery-thumbs)
  const galleryThumbs = new Swiper('.gallery-thumbs', {
    modules: [Pagination, Scrollbar],
    spaceBetween: 3,
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  // Initialize Swiper for main slider (gallery-top) linked to thumbnails (gallery-thumbs)
  const galleryTop = new Swiper('.gallery-top', {
    modules: [Pagination, Scrollbar, Thumbs],
    spaceBetween: 3,
    loop: true,
    loopedSlides: 3,
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  // Find all buttons with class .save
  const downloadBtns = document.querySelectorAll('.save');

  // For each .save button, add a click event listener
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // Get the current active slide in gallery-top
      const activeSlide = galleryTop.slides[galleryTop.activeIndex];

      // Get the image of the current active slide
      const image = activeSlide.querySelector('img');

      // Create a temporary link for downloading the image
      const link = document.createElement('a');
      link.href = image.src;
      link.download = 'image.jpg'; // File name for downloading
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });

  // Find all buttons with class .print
  const printBtns = document.querySelectorAll('.print');

  // For each .print button, add a click event listener
  printBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // Get the current active slide in gallery-top
      const activeSlide = galleryTop.slides[galleryTop.activeIndex];

      // Get the image of the current active slide
      const image = activeSlide.querySelector('img');

      // Open a new window with the image for printing
      const printWindow = window.open();
      printWindow.document.write(`<img src="${image.src}" style="max-width: 100%;">`);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    });
  });
});
