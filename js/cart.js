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
  totalAfterDiscount.textContent = totalPrice.textContent;

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
