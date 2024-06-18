const buttonArrow = document.querySelectorAll('.button__arrow');
const gridContainerGroupArticles = document.querySelectorAll('.grid-container__group-articles');
const headerContainer = document.querySelector('.search-form__container');
const searchButton = document.querySelector('.search-button');
const searchButtonSound = document.querySelector('.search-button__sound');
const buttonMenuBurger = document.querySelector('.button-menu__burger');
const buttonMenuCross = document.querySelector('.button-menu__cross');
const headerNav = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');


//При наведении на кнопку со стрелкой, появляется эффект
for (let i = 0; i < buttonArrow.length; i++) {
  buttonArrow[i].addEventListener('mouseover', function () {
    gridContainerGroupArticles[i].classList.add('hovered');
  });
  buttonArrow[i].addEventListener('mouseout', function () {
    gridContainerGroupArticles[i].classList.remove('hovered');
  });
}


// клик по кнопке up-arrow
const upArrow = document.querySelector('.up-arrow');
upArrow.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

upArrow.addEventListener('touched', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});


//При наведении на поиск, появляется эффект
headerContainer.addEventListener('mouseover', function () {
  searchButton.classList.add('hovered');
  searchButtonSound.classList.add('hovered');
});
headerContainer.addEventListener('mouseout', function () {
  searchButton.classList.remove('hovered');
  searchButtonSound.classList.remove('hovered');
});


// При наведении на кнопку блок в шапке профиля, появляется блок
const headerGroup = document.querySelectorAll('.header__group');
const arrow = document.querySelectorAll('.arrow');

let arr = Array.from(headerGroup);
arr.shift(); // Удаляем первый элемент
arr.pop(); // Удаляем последний элемент

const headerRow = document.querySelectorAll('.header__row');

// Перебираем оставшиеся элементы в arr
arr.forEach((element, i) => {
  element.addEventListener('click', function () {
    headerRow[i].classList.toggle('hovered');
    arrow[i].classList.toggle('arrow__img-two');
  });
});


//открытие бургер меню
buttonMenuBurger.addEventListener('click', toggleButtonMenu);
buttonMenuCross.addEventListener('click', toggleButtonCross);

function toggleButtonMenu(e) {
  e.preventDefault();
  headerNav.style.display = 'flex';
  overlay.style.display = 'block';
  overlay.style.zIndex = '101';
}

function toggleButtonCross(e) {
  e.preventDefault();
  headerNav.style.display = 'none';
  overlay.style.display = 'none';
  overlay.style.zIndex = '100';
}


// открытие окна при вводе в input
const input = document.getElementById('myInput');
const popup = document.querySelector('.popup');
const popupBlock = document.querySelector('.popup__block');
input.addEventListener('input', function () {
  const inputValue = input.value.trim(); // Получаем значение и обрезаем лишние пробелы

  if (inputValue !== '') {
    openPopup();
  } else {
    closePopup();
  }
});


function openPopup() {
  popup.classList.add('popup__active');
  overlay.style.display = 'block';
  popupBlock.style.display = 'flex';
}

function closePopup() {
  popup.classList.remove('popup__active');
  overlay.style.display = 'none';
  popupBlock.style.display = 'none';
}


//При наведении на категории появляется эффект
const coloringPagesText = document.querySelectorAll('.coloring-pages__text');
const coloringPagesRow = document.querySelectorAll('.coloring-pages__row');

for (let i = 0; i < coloringPagesText.length; i++) {
  coloringPagesText[i].addEventListener('mouseover', function () {
    coloringPagesRow[i].classList.add('hovered');
  });
  coloringPagesText[i].addEventListener('mouseout', function () {
    coloringPagesRow[i].classList.remove('hovered');
  });
}
