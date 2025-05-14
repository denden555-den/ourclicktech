function addToCart(id, name, price) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}
