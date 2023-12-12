import anime from 'animejs';
import { throttle } from 'lodash';

const scrollBtn = document.querySelector('.scroll-up-btn');
window.addEventListener('scroll', throttle(showScrollBtn, 300));
scrollBtn.addEventListener('click', handleScroll);

function showScrollBtn() {
  if (window.scrollY > 300) {
    scrollBtn.classList.remove('is-hidden');
    scrollBtn.classList.add('scroll-visible');
  } else {
    scrollBtn.classList.add('is-hidden');
    scrollBtn.classList.remove('scroll-visible');
  }
}

function handleScroll() {
  anime({
    targets: document.scrollingElement || document.documentElement,
    scrollTop: 0,
    duration: 1000,
    easing: 'easeInOutQuad',
  });
}
showScrollBtn();
