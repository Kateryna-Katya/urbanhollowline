import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// =========================
// GALLERY SWIPER
// =========================
const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Navigation],

  loop: true,
  speed: 600,

  slidesPerView: 1.2,
  spaceBetween: 16,

  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev',
  },

  breakpoints: {
    1440: {
      slidesPerView: 3.2,
      spaceBetween: 24,
    },
  },
});

// =========================
// REVIEWS SWIPER
// =========================
let reviewsSwiper = null;

function initReviewsSwiper() {
  if (window.innerWidth < 1440 && !reviewsSwiper) {
    reviewsSwiper = new Swiper('.reviews-swiper', {
      modules: [Autoplay],

      loop: true,
      speed: 800,

      slidesPerView: 1.3,
      spaceBetween: 16,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }

  // destroy після 1440
  if (window.innerWidth >= 1440 && reviewsSwiper) {
    reviewsSwiper.destroy(true, true);
    reviewsSwiper = null;
  }
}

initReviewsSwiper();

window.addEventListener('resize', initReviewsSwiper);