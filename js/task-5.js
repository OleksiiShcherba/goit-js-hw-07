function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body_element = document.querySelector('body');
const button_element = document.querySelector('.change-color');
const color_element = document.querySelector('.color');

button_element.addEventListener('click', event => {
  body_element.style.backgroundColor = getRandomHexColor();
  color_element.textContent = body_element.style.backgroundColor;
});