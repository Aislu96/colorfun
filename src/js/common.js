const buttonArrow = document.querySelectorAll('.button__arrow');
const gridContainerGroupArticles = document.querySelectorAll('.grid-container__group-articles');

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
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

upArrow.addEventListener('touched', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
