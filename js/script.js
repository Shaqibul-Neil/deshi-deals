'use strict';

const btnsCart = document.querySelectorAll('.cart-btn');
const inputCoupon = document.querySelector('#input-coupon');
const btnApply = document.querySelector('#btn-apply');
const card = document.querySelectorAll('.card');

console.log(btnsCart, inputCoupon, btnApply, card);

//cart button functionality
btnsCart.forEach(btnCart => {
  let hoverTimeout;
  //mouseover effect
  btnCart.addEventListener('mouseover', function () {
    hoverTimeout = setTimeout(() => {
      this.querySelector('span').classList.replace('opacity-100', 'opacity-0');
      //   this.querySelector("span").classList.add("opacity-0");
      this.querySelector('i').classList.replace('opacity-0', 'opacity-100');
      //   this.querySelector("i").classList.remove("opacity-0");
      //   this.querySelector("i").classList.add("opacity-100");
    }, 100);
  });
  //mouseout effect
  btnCart.addEventListener('mouseout', function () {
    clearTimeout(hoverTimeout);
    this.querySelector('span').classList.replace('opacity-0', 'opacity-100');
    // this.querySelector("span").classList.remove("opacity-0");
    // this.querySelector("span").classList.add("opacity-100");
    this.querySelector('i').classList.replace('opacity-100', 'opacity-0');
    // this.querySelector("i").classList.remove("opacity-100");
    // this.querySelector("i").classList.add("opacity-0");
  });
  //click effect
  btnCart.addEventListener('click', function (e) {
    const priceCard =
      this.closest('.card').querySelector('.product-price').textContent;
    console.log(priceCard);
  });
});
