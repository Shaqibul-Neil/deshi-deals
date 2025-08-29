//apply btn functionality
btnApply.addEventListener('click', function (e) {
  const inputValue = inputCoupon.value;
  const promoCode = btnPromo.innerText;
  const priceBeforeDiscount = +totalPrice.textContent;

  //Already applied
  if (btnApply.disabled) return;

  //Wrong code
  if (inputValue !== promoCode || !inputValue) {
    alert(
      `Wrong Code. You can click on the Promo Code Button for auto fill up`
    );
    return;
  }

  //Discount Applicable
  if (inputValue === promoCode) {
    if (priceBeforeDiscount >= 200) {
      const discounted = +(priceBeforeDiscount * 0.2).toFixed(2);
      totalDiscount.innerText = discounted;
      totalAfterDiscount.innerText = priceBeforeDiscount - discounted;

      //disable the apply btn after applying once
      btnApply.disabled = true;
      btnApply.innerText = 'Applied';
    } else alert(`Please purchase 200 or more to get discount`);
  }
});
