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
