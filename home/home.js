const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', function () {
  navbarToggle.classList.toggle('is-active');
  navbarMenu.classList.toggle('active');
});

const txts = document.querySelector('.animate-text').children,
  txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
  textOutTimer = 3000;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove('text-in', 'text-out');
  }
  txts[index].classList.add('text-in');

  setTimeout(function () {
    txts[index].classList.add('text-out');
  }, textOutTimer);

  setTimeout(function () {
    if (index === txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}
window.onload = animateText;

function toggleMessage() {
  const shortText = document.querySelector('.message-text.short');
  const fullText = document.querySelector('.message-text.full');
  const btn = document.querySelector('.read-more-btn');

  if (fullText.style.display === 'none') {
    fullText.style.display = 'block';
    shortText.style.display = 'none';
    btn.textContent = 'Read Less';
  } else {
    fullText.style.display = 'none';
    shortText.style.display = 'block';
    btn.textContent = 'Read More';
  }
}
