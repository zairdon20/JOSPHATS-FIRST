const list = document.querySelector('.navbar-links');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const menuItems = document.querySelectorAll('.link');

menuItems.forEach((li) => {
  li.addEventListener('click', () => {
    list.classList.remove('d-block');
  });
});

menuIcon.addEventListener('click', () => {
  list.classList.add('d-block');
});

closeIcon.addEventListener('click', () => {
  list.classList.remove('d-block');
});
