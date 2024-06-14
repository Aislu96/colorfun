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
