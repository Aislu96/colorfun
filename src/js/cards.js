// отрисовка карточек
let cartoons = require('../js/cartoons.json');
let cartoonsContainer = document.querySelector('.grid-container__cartoons');
const buttonCartoons = document.querySelector('.button__cartoons');
let cartoonsPerPageMobile = 16;
let cartoonsPerPageDesktop = 24;
let cartoonsShown = 0;

function showMoreCards() {
  let cartoonsPerPage = (window.innerWidth <= 700) ? cartoonsPerPageMobile : cartoonsPerPageDesktop;
  let cardsToAdd = cartoonsPerPage;
  if (cartoonsShown + cardsToAdd > cartoons.length) {
    cardsToAdd = cartoons.length - cartoonsShown;
  }


  for (let i = cartoonsShown; i < cartoonsShown + cardsToAdd; i++) {
    let newContainer = document.createElement('div');
    newContainer.classList.add('grid-container__group', 'grid-container__cartoons');

    let imgElement = document.createElement('img');
    imgElement.src = cartoons[i].src;
    imgElement.alt = cartoons[i].text;

    let textElement = document.createElement('p');
    textElement.classList.add('p19');
    textElement.textContent = cartoons[i].text;

    newContainer.appendChild(imgElement);
    newContainer.appendChild(textElement);
    cartoonsContainer.appendChild(newContainer);
  }
  cartoonsShown += cardsToAdd;

  if (cartoonsShown >= cartoons.length) {
    buttonCartoons.style.display = 'none';
  }
}

showMoreCards();


buttonCartoons.addEventListener('click', showMoreCards);

window.addEventListener('resize', () => {
  cartoonsShown = 0;
  cartoonsContainer.innerHTML = '';
  showMoreCards();
});

