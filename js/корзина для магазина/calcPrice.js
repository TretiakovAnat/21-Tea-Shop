function calcCardPriceAndDelivery() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartItem = document.querySelectorAll(".cart-item");
  const totalPriceEl = document.querySelector(".total-price");
  const deliverycost = document.querySelector(".delivery-cost");
  const cardDelivery = document.querySelector("[data-cart-delivery]");
  const cardPrice = document.querySelector(".price__currency");

  let totalPrice = 0;

  //   Нахождим количество и цены
  cartItem.forEach(function (item) {
    const amountEl = item.closest(".cart-item").querySelector("[data-counter]");
    const priceEl = item.querySelector(".price__currency");
    const currentPrice =
      parseInt(priceEl.innerText) * parseInt(amountEl.innerText);

    // totalPrice = totalPrice + currentPrice;

    totalPrice += currentPrice;
  });
  // отображаем общую цену в корзине
  totalPriceEl.innerText = totalPrice;

  if (totalPrice > 0) {
    cardDelivery.classList.remove("none");
  } else {
    cardDelivery.classList.add("none");
  }
  if (totalPrice >= 600) {
    deliverycost.classList.add("free");
    deliverycost.innerText = "бесплатно";
  } else {
    deliverycost.classList.remove("free");
    deliverycost.innerText = "250₽ ";
  }
}
