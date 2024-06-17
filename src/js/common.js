const buttonArrow = document.querySelectorAll('.button__arrow');
const gridContainerGroupArticles = document.querySelectorAll('.grid-container__group-articles');
const headerContainer =  document.querySelector('.search-form__container');
const searchButton = document.querySelector('.search-button');
const searchButtonSound = document.querySelector('.search-button__sound');

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
arr.shift();
arr.pop();

const headerRow =  document.querySelectorAll('.header__row');
for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener('mouseover', function () {
    headerRow[i].classList.add('hovered');
    arrow[i].style.backgroundImage = '/assets/img/header/arrowDownViolet.svg';
  });
  arr[i].addEventListener('mouseout', function () {
    headerRow[i].classList.remove('hovered');
    arrow[i].style.backgroundImage = '/assets/img/header/arrowUpViolet.svg';
  });
}
