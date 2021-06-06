// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const refs = {
    inputRange:document.querySelector("#font-size-control"),
    inputText:document.querySelector("#text"),
}


const sizeTextChange = () => {
  refs.inputText.style.fontSize = `${refs.inputRange.value}px`;
};

refs.inputRange.addEventListener('input', sizeTextChange);