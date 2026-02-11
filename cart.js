  let cart = [];
  let total = 0;

  function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    renderCart();
  }

  function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - KSh ${item.price}`;
      cartItems.appendChild(li);
    });

    cartTotal.textContent = total;
  }

  function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");

  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - KSh ${item.price}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total;
  if (cartCount) cartCount.textContent = cart.length;
}
