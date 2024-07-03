let counters = document.querySelectorAll(".inner-counting-numbers");

counters.forEach((counter, index) => {
  let goal = [1550, 100, 45, 700][index]; // set goals for each counter
  let count = 0;
  let interval = setInterval(() => {
    if (count < goal) {
      count++;
      counter.querySelector("h1").innerText = count;
    } else {
      clearInterval(interval);
    }
  }, 1);
});




const smallAboutUsElements = document.querySelectorAll('.small-about-us, .inner-pricing');

window.addEventListener('scroll', () => {
  smallAboutUsElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    if (isInView) {
      element.classList.add('scroll-in');
    } else {
      element.classList.remove('scroll-in');
    }
  });
});

const heroHeadElement = document.querySelector('.hero-head');
const heroTextElement = document.querySelector('.hero-text');
const getStartedBtnElement = document.querySelector('.get-started-btn');

const elementsToAnimate = [heroHeadElement, heroTextElement, getStartedBtnElement];

window.addEventListener('scroll', () => {
  elementsToAnimate.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    if (isInView) {
      element.classList.add('scroll-in');
    } else {
      element.classList.remove('scroll-in');
    }
  });
});












document.addEventListener('DOMContentLoaded', function () {
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;
  let index = 0;

  function moveCarousel() {
    const itemWidth = carouselItems[0].getBoundingClientRect().width + 20; // Width of item + margin
    index = (index + 2) % totalItems; // Move by 2 items
    const translateValue = -1 * index * itemWidth;
    carouselTrack.style.transform = `translateX(${translateValue}px)`;
  }

  setInterval(moveCarousel, 5000); // Move every 5 seconds

  // Recalculate on window resize
  window.addEventListener('resize', function() {
    moveCarousel();
  });
});








