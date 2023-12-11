const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', () => {
  const barsIcon = document.querySelector('.fa-bars');
  const timesIcon = document.querySelector('.fa-times');
  barsIcon.classList.toggle('d-none');
  timesIcon.classList.toggle('d-none');
});

const Traders = [
  {
    id: 1,
    name: 'Jonathan',
    image: './image/person1.jpg',
    Profile: 'Developer',
    about: 'Passionate about creating innovative solutions.',
  },
  {
    id: 2,
    name: 'MacFlick',
    image: './image/person2.jpg',
    Profile: 'Cloud Architecture',
    about: 'Good sense with marketing and services anout micro projects',
  },
  {
    id: 3,
    name: 'Cole Palmer',
    image: './image/person3.jpg',
    Profile: 'Designer',
    about: 'Passionate about creating new fashions and his creations are amazing nowadays',
  },
  {
    id: 4,
    name: 'Shinzo',
    image: './image/person4.jpg',
    Profile: 'Developer',
    about: 'Passionate about creating innovative solutions.',
  },
  {
    id: 5,
    name: 'Moak Johnathan',
    image: './image/person5.jpg',
    Profile: 'Business Analyst',
    about: 'Speeding the wind wtih the currency flows on the markets',
  },
  {
    id: 5,
    name: 'Joan Mavis',
    image: './image/person6.jpg',
    Profile: 'Youth Generation Trader Lead',
    about: 'BitCoin and the blockchain stuffs are really interesting.',
  },

];

const seeMore = document.querySelector('.see-more');
const seeLess = document.querySelector('.see-less');
const traderWrapper = document.querySelector('.tradersContainer');

function showMore() {
  seeLess.style.display = 'block';
  seeMore.style.display = 'none';
}

function showLess() {
  seeLess.style.display = 'none';
  seeMore.style.display = 'block';
}

function displayTrader(trader) {
  const traderTemplate = document.querySelector('#dynamic_template');
  const traderElement = traderTemplate.content.querySelector('.dynamic').cloneNode(true);

  traderElement.querySelector('#trader_img').src = trader.image;
  traderElement.querySelector('#trader-name').textContent = trader.name;
  traderElement.querySelector('#tader-pos').textContent = trader.Profile;
  traderElement.querySelector('#trader-Carrier').textContent = trader.about;

  traderWrapper.appendChild(traderElement);
}

function displayTradersInfo(indices) {
  traderWrapper.innerHTML = '';
  indices.forEach((index) => {
    const trader = Traders[index];
    displayTrader(trader);
  });
}

function deskMedia() {
  traderWrapper.innerHTML = '';
  Traders.forEach((trader) => {
    displayTrader(trader);
  });
}

seeMore.addEventListener('click', () => {
  showMore();
  displayTradersInfo([0, 1, 2, 3, 4, 5]);
});

seeLess.addEventListener('click', () => {
  displayTradersInfo([0, 1]);
  showLess();
});

function handleWindowResize() {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    displayTradersInfo([0, 1]);
  } else {
    deskMedia();
  }
}

handleWindowResize();

window.addEventListener('resize', handleWindowResize);
