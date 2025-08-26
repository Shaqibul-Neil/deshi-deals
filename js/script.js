'use strict';

const btnsCart = document.querySelectorAll('.cart-btn');
const inputCoupon = document.querySelector('#input-coupon');
const btnApply = document.querySelector('#btn-apply');
const card = document.querySelectorAll('.card');
const totalPrice = document.querySelector('.total-price');
const cartContainer = document.querySelector('#cart-container');

// console.log(btnsCart, inputCoupon, btnApply, card);

const timeout = function () {};

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
  btnCart.addEventListener('click', function () {
    const priceCard =
      +this.closest('.card').querySelector('.product-price').textContent;
    console.log(priceCard);
    //calculating price
    const existingTotalCartPrice = +totalPrice.textContent;
    totalPrice.textContent = (existingTotalCartPrice + priceCard).toFixed(2);

    //product data fetching
    const currentCard = this.closest('.card');
    const currentTitle = currentCard
      .querySelector('.card-title')
      .innerText.trim();
    const currentPrice = currentCard
      .querySelector('.product-price')
      .innerText.trim();
    const currentImgSrc = currentCard.querySelector('figure img').src;
    //creating cart element
    const HTML = ` 
                <div
                  class="card card-side shadow-sm bg-[#33303025] items-center h-[134px] mt-5"
                >
                  <figure class="h-[125px] w-[120px] p-4">
                    <img src="${currentImgSrc}" alt="" class="w-full" />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title font-semibold">${currentTitle}</h2>
                    <p class="text-xl">
                      <span class="product-price">${currentPrice}</span>TK
                    </p>
                  </div>
                </div>`;
    cartContainer.insertAdjacentHTML('afterbegin', HTML);
  });
});
