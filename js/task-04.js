// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const refs = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
};



const increment = () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
};

refs.incrementBtn.addEventListener('click', increment);
refs.decrementBtn.addEventListener('click', decrement);
 

