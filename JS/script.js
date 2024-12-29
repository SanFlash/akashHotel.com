// Initialize AOS
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  
    // Swiper Carousel
    new Swiper(".swiper-container", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
  