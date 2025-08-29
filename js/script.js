'use strict';
const productsContainer = document.querySelector('.products-container');
const inputCoupon = document.querySelector('#input-coupon');
const btnApply = document.querySelector('#btn-apply');
const totalPrice = document.querySelector('.total-price');
const cartContainer = document.querySelector('#cart-container');
const totalQuantity = document.querySelector('.total-quantity');

// console.log(btnsCart, inputCoupon, btnApply, card);
let count = 0;

//cart button functionality
document.addEventListener('click', function (e) {
  const btnCart = e.target.closest('.cart-btn');
  if (!btnCart) return;
  const priceCart = +btnCart.closest('.card').querySelector('.product-price')
    .textContent;

  //calculating price
  const existingTotalCartPrice = +totalPrice.textContent;
  totalPrice.textContent = (existingTotalCartPrice + priceCart).toFixed(2);

  //product data fetching
  const currentCard = btnCart.closest('.card');
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
                  <div class="card-body relative">
                    <h2 class="card-title font-semibold">${currentTitle}</h2>
                    <div class ='flex justify-between'>
                      <p class="text-xl">
                        <span class="product-price">${currentPrice}</span>TK
                      </p>
                      <button class="remove-item cursor-pointer absolute bottom-0 right-5 text-xl hover:"><i class="fa-solid fa-trash transition-transform"></i></button>
                    </div>
                    
                  </div>
                </div>`;
  cartContainer.insertAdjacentHTML('afterbegin', HTML);

  //updating quantity
  count++;
  totalQuantity.innerText = count;
});

//mouseover effect
document.addEventListener('mouseover', function (e) {
  const btnCart = e.target.closest('.cart-btn');
  if (!btnCart) return;
  const hoverTimeout = setTimeout(() => {
    btnCart.querySelector('span').classList.replace('opacity-100', 'opacity-0');
    //   this.querySelector("span").classList.add("opacity-0");
    btnCart.querySelector('i').classList.replace('opacity-0', 'opacity-100');
    //   this.querySelector("i").classList.remove("opacity-0");
    //   this.querySelector("i").classList.add("opacity-100");
  }, 100);
  btnCart.dataset.hoverTimeout = hoverTimeout;
});

//mouseout effect
document.addEventListener('mouseout', function (e) {
  const btnCart = e.target.closest('.cart-btn');
  if (!btnCart) return;
  clearTimeout(btnCart.dataset.hoverTimeout);
  btnCart.querySelector('span').classList.replace('opacity-0', 'opacity-100');
  // this.querySelector("span").classList.remove("opacity-0");
  // this.querySelector("span").classList.add("opacity-100");
  btnCart.querySelector('i').classList.replace('opacity-100', 'opacity-0');
  // this.querySelector("i").classList.remove("opacity-100");
  // this.querySelector("i").classList.add("opacity-0");
});

//remove item
cartContainer.addEventListener('click', function (e) {
  const removeItem = e.target.closest('.remove-item');
  if (removeItem) {
    const currentCard = e.target.closest('.card');

    //decreasing balance
    const currentPrice = +e.target
      .closest('.card')
      .querySelector('.product-price').textContent;
    const updatedPrice = +totalPrice.textContent - currentPrice;
    totalPrice.textContent = updatedPrice;

    //decreasing quantity
    count--;
    totalQuantity.innerText = count;

    //removing cart item
    currentCard.remove();
  } else return;
});
