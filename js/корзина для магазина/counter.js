// добавляю прослушку на все окно
window /
  addEventListener("click", function (event) {
    // Проверяем является ли елемент по которому был клик кнопкой плюс
    if (event.target.dataset.action === "plus") {
      const counterWrapper = event.target.closest(".counter-wrapper");

      const counter = counterWrapper.querySelector("[data-counter]");

      counter.innerText = ++counter.innerText;
    }

    // Проверяем является ли елемент по еоторому был клик кнопкой минус
    if (event.target.dataset.action === "minus") {
      const counterWrapper = event.target.closest(".counter-wrapper");

      const counter = counterWrapper.querySelector("[data-counter]");
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
        // Проверка на товар в корзине
      } else if (
        event.target.closest(".cart-wrapper") &&
        parseInt(counter.innerText) === 1
      ) {
        // Удаляем из корзины если меньше 1
        event.target.closest(".cart-item").remove();

        toggleCard();
        // Пересчет общей стоимости
        calcCardPriceAndDelivery();
      }
    }

    // Проверяем клик на плюс или на минус в корзине
    if (
      event.target.hasAttribute("data-action") &&
      event.target.closest(".cart-wrapper")
    ) {
      // Пересчет общей стоимости

      calcCardPriceAndDelivery();
    }
  });
