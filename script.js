const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', function () {
  navbarToggle.classList.toggle('is-active');
  navbarMenu.classList.toggle('active');
});
