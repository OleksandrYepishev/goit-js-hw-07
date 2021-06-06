// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />

//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//     Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const validationInput = document.getElementById('validation-input');
// validationInput.addEventListener('input', onInputChange);


validationInput.addEventListener('blur', onInputBlur);


function onInputBlur(elem) {
    if (Number(validationInput.dataset.length) === elem.currentTarget.value.length) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');

    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
        console.log(validationInput.dataset.length);
        console.log(elem.currentTarget.value.length);
    }
};
