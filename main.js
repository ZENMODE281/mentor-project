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
  }, 0.4);
});

function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }