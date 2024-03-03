function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const divs_array = [];
  let base_width = 30;
  let base_height = 30;

  for (let i = 1; i <= amount; i++){
    let new_element = document.createElement('div');
    new_element.style.width = base_width + 'px';
    new_element.style.height = base_height + 'px';
    new_element.style.backgroundColor = getRandomHexColor();

    base_width += 10;
    base_height += 10;

    divs_array.push(new_element);
  }

  const boxes_element = document.querySelector('div#boxes');
  boxes_element.innerHTML = "";
  boxes_element.append(...divs_array);
}

function destroyBoxes(amount) {
  const boxes_element = document.querySelector('div#boxes');
  boxes_element.innerHTML = "";
}

const create_buttom = document.querySelector('div#controls button[data-create]');
const delete_buttom = document.querySelector('div#controls button[data-destroy]');

create_buttom.addEventListener('click', event => {
  const number_element = document.querySelector('div#controls input').value;
  if (number_element <= 100 && number_element >= 1) {
    createBoxes(number_element);
  }
});

delete_buttom.addEventListener('click', event => {
  destroyBoxes();
});