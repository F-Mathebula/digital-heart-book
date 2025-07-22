const toggleButton = document.getElementById('toggleTheme');
const body = document.body;
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const gif = document.getElementById('themeGif'); // ← Grab GIF element

toggleButton.addEventListener('click', () => {
  const isBlue = body.classList.contains('theme-blue');

  if (isBlue) {
    body.classList.remove('theme-blue');
    body.classList.add('theme-red');
    toggleTheme.textContent = '❤️';

    // Update modal content
    modalTitle.innerHTML = 'To My Flame ❤️';
    modalMessage.innerHTML = `
      I know it's not much, but i hope you enjoy regardless.<br><br>
      🔥 Happy Birthday, my love 🔥
    `;

    // Change GIF
    gif.src = 'images/11.webp';
  } else {
    body.classList.remove('theme-red');
    body.classList.add('theme-blue');
    toggleTheme.textContent = '💙';

    // Update modal content
    modalTitle.innerHTML = 'To My Player 2 💙';
    modalMessage.innerHTML = `
      Every moment we spent together — even in pixels — means more to me
      than you’ll ever know. I hope this small site makes you smile. I made it with all my heart.
      <br><br>
      🎂 Happy Birthday, my love 🎂
    `;

    // Change GIF
    gif.src = 'images/3.webp';
  }
});

const modal = document.getElementById('myModal');
const openModal = document.getElementById('openModal');
const closeModal = document.querySelector('.close');

openModal.onclick = () => {
  modal.classList.add('show'); // Adds 'display: flex' + 'opacity: 1'
};

closeModal.onclick = () => {
  modal.classList.remove('show');
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
};
