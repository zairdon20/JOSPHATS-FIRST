const list = document.querySelector('.navbar-links');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const menuItems = document.querySelectorAll('.link');
const main = document.querySelector('main');
const html = document.querySelector('html');
const cardContaiber = document.querySelector('.project-container-list');
const mobileMedia = [
  {
    id: 'project1',
    title: "Tresor's Portfolio",
    images: {
      img: './images/Snapshoot-Portfolio.png',
      closePop: './images/icons/Close_icon_dark.png',
    },
    techno: ['Ruby on rails', 'Css', 'Javascript', 'Html'],
    heading: "Tresor's Portfolio",
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://zairdon20.github.io/JOSPHATS-FIRST/',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/zairdon20/JOSPHATS-FIRST/',
      },
    ],
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus at illo explicabo voluptatum maiores eum exercitationem fugit? In, nobis asperiores!',
  },
];

let project = 1;
let sections = [];
const cards = [];

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

// Create popup window

mobileMedia.forEach((asection) => {
  const section = document.createElement('section');
  const list = document.createElement('ul');
  const paragraph = document.createElement('p');
  const close = document.createElement('img');

  section.className = 'popupWindow';
  list.className = 'project-container-list';
  close.classList = 'close-icon';

  section.id = asection.id;
  paragraph.innerText = asection.paragraph;
});
