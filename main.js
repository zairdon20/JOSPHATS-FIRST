const list = document.querySelector('.navbar-links');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const menuItems = document.querySelectorAll('.link');
const btns = document.querySelectorAll('.project-btn');
const popup = document.querySelector('.hide');
const closeBtn = document.querySelector('.popup-close-btn');
const cardContainer = document.querySelector('.project-container-list');

// card data
const Cards = [
  {
    id: 'card1',
    image: 'img/img/modal-popup.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
  {
    id: 'card2',
    image: 'img/img/modal-popup.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
  {
    id: 'card3',
    image: 'img/img/modal-popup.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
  {
    id: 'card4',
    image: 'img/img/modal-popup.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['www.google.com', 'www.facebook.com'],
  },
  {
    id: 'card5',
    image: 'img/img/modal-popup.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
  {
    id: 'card6',
    image: 'img/img/modal-popup.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
];

// popup code

function popupCode(position) {
  const el = Cards[position];

  const pop = document.querySelector('.bg-popup');
  pop.style.display = 'block';

  const firstCard = document.querySelector('.img-block');
  firstCard.src = `${el.image}`;

  const seeLive = document.querySelector('.see-live');
  seeLive.href = `${el.links[0]}`;

  const seeSource = document.querySelector('.see-source');
  seeSource.href = `${el.links[1]}`;

  document.querySelector('.card-heading-popup').innerText = el.name;

  const btnContiner = document.getElementById('foo');
  btnContiner.innerHTML = '';

  const paragraph = document.querySelector('.popup-text');
  paragraph.textContent = `${el.description}`;

  el.technologies.forEach((btn) => {
    const liBtn = document.createElement('li');
    liBtn.className = 'buttons font-f';
    liBtn.innerText = btn;
    btnContiner.appendChild(liBtn);
  });

  document.querySelector('.popup-text').innerText = el.description;

  const popupCloseButton = document.querySelector('.popup-close-btn');
  popupCloseButton.addEventListener('click', () => {
    const pop = document.querySelector('.bg-popup');
    pop.style.display = 'none';
  });
}

// card code

Cards.forEach((card, i) => {
  let languages = '';
  card.technologies.forEach((lang) => {
    languages += `<li class="buttons font-f">${lang}</li>`;
  });

  const template = document.createElement('template');

  const btn = document.createElement('button');
  btn.className = 'green-btn font-f popOpen';
  btn.innerText = card.button;
  btn.addEventListener('click', () => {
    popupCode(i);
  });

  template.innerHTML = `<li class="project-cards">
      <div class="bottom-card">
        <h3 class="card-heading font-f">${card.name}</h3>
        <ul class="technologies">
          ${languages}
        </ul>
      </div>
    </li>`;

  const far = template.content.firstChild;
  far.childNodes[1].appendChild(btn);
  cardContainer.appendChild(far);
});

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

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    popup.classList.remove('hide');
  });
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hide');
});

// Implement the client validation for inputs
const isLowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);
const errorMessage = document.querySelector('.error-message');
const form = document.forms['contact-form'];
const mail = form.email;

// Implement the email checker

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = mail.value;
  if (!isLowerCase(email)) {
    errorMessage.style.display = 'block';
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 3000);
  } else {
    errorMessage.style.display = 'none';
    form.submit();
  }
});
