const INITIAL_ITEM_SIZE = 30;
const boxDiv = document.getElementById('boxes');
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

const itemSize = {
  value: INITIAL_ITEM_SIZE,
  increment() {
    this.value += 10;
  },
  reset() {
    this.value = INITIAL_ITEM_SIZE;
  },
};

function createBoxes() {
  const amount = input.value;
  const items = [];

  for (let i = 0; i < amount; i++) {
    const divItem = document.createElement('div');
    divItem.style.backgroundColor = getRandomColor();
    divItem.style.width = `${itemSize.value}px`;
    divItem.style.height = `${itemSize.value}px`;
    itemSize.increment();
    items.push(divItem);
  }

  boxDiv.append(...items);
}

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function destroyBoxes() {
  boxDiv.innerHTML = '';
  itemSize.reset();
}

function getRandomColor() {
  const red = getRandom(0, 255);
  const green = getRandom(0, 255);
  const blue = getRandom(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}