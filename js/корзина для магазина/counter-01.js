// Настройка счетчика для 1 елемента на страничке

// Находим елементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");

// отслеживаем клик на кнопку минус
btnMinus.addEventListener("click", function () {
  // Проверяем что бы счетчик не был меньше 1
  if (parseInt(counter.innerText) > 1) {
    // уменьшаем текст в счетчике
    counter.innerText = --counter.innerText;
  }
});

// отслеживаем клик на кнопку плюс
btnPlus.addEventListener("click", function () {
  //   увелчиваем текст в счетчике
  counter.innerText = ++counter.innerText;
});
