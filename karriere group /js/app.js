const burger = document.getElementById('burger');
const hiddenMenu = document.getElementById('hidden_menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active'); 
    hiddenMenu.classList.toggle('active'); 
})

/* Seit parallax cases start*/
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
    const duration = 2000; // Общее время анимации
  
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let current = 0;
  
      
      let step;
      if (target === 300) step = 20;
      if (target === 6) step = 1;
      if (target === 35) step = 2;
      if (target === 2018) step = Math.ceil(target / 15);
  
      const interval = duration / (target / step);
  
      const updateCounter = () => {
        current += step;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = current;
        }
      };
  
      const timer = setInterval(updateCounter, interval);
    });
 
    // Параллаксный эффект для фона
    const background = document.querySelector('.container-item');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        document.body.style.backgroundPositionY = `${ -scrollY / 2 } px`; 
    });
  });
  /* Seit parallax cases end*/


//   Ela
$(document).ready(function(){

    
    $('.logo-container').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
    });

});
//   Ela

// Get the scroll to top button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Check if the button exists to avoid errors
if (scrollToTopBtn) {
  // Show the button when scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
} else {
  console.warn("Scroll to Top button not found in the document.");
}
