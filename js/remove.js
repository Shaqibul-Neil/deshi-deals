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

    // Check if discount should be reset
    if (btnApply.disabled) {
      if (updatedPrice < 200) {
        totalDiscount.innerText = 0;
        totalAfterDiscount.innerText = updatedPrice;
        btnApply.disabled = false;
        btnApply.innerText = 'Apply';
      } else {
        // Maintain discount if total still >= 200
        const newDiscount = +(updatedPrice * 0.2).toFixed(2);
        totalDiscount.innerText = newDiscount;
        totalAfterDiscount.innerText = (updatedPrice - newDiscount).toFixed(2);
        btnApply.disabled = true;
        btnApply.innerText = 'Applied';
      }
    } else {
      //discount is not applied yet
      totalAfterDiscount.innerText = updatedPrice.toFixed(2);
    }
  } else return;
});
