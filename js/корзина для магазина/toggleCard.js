function toggleCard() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cardEmptyBadge = document.querySelector("[data-cart-empty]");
  const orderForm = document.querySelector("#order-form");

  if (cartWrapper.children.length > 0) {
    cardEmptyBadge.classList.add("none");
    orderForm.classList.remove("none");
  } else {
    cardEmptyBadge.classList.remove("none");
    orderForm.classList.add("none");
  }
}
