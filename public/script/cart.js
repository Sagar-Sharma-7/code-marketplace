const addToCart = document.querySelectorAll(".add-to-cart");
const templateNameWrap = document.querySelector(".template-name-wrap");
const templatePriceWrap = document.querySelector(".template-price-wrap");
const totalPrice = document.querySelector(".total-price");
const cartSection = document.querySelector(".cart-section");
const cartBtn = document.querySelector(".cart-btn");
const cancelOrder = document.querySelector(".cancel-btn");
const buyNowBtn = document.querySelector(".order-btn");

const price = [];
addToCart.forEach((cart) => {
  cart.addEventListener("click", () => {
    let templateName = document.createElement("div");
    templateName.classList.add(".template-name");
    templateName.innerHTML = cart.dataset.name;
    let templatePrice = document.createElement("div");
    templatePrice.classList.add(".template-price");
    templatePrice.innerHTML = `₹    ${cart.dataset.price}`;
    templateNameWrap.appendChild(templateName);
    templatePriceWrap.appendChild(templatePrice);
    price.push(cart.dataset.price);
    let sum = 0;
    price.forEach((cost) => {
      sum += parseFloat(cost);
    });
    totalPrice.innerHTML = `₹${sum.toFixed(2)}`;
    // cartSection.style.right = "0vw";
  });
});

cartBtn.addEventListener("click", () => {
  cartSection.style.right = "0vw";
});

cancelOrder.addEventListener("click", () => {
  cartSection.style.right = "-100vw";
});
buyNowBtn.addEventListener("click", () => {
  cartSection.style.right = "-100vw";
});
