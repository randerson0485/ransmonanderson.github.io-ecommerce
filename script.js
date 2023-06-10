// Initialize the cart and total variables
let cart = [];
let total = 0;

// Function to add an item to the cart
function addToCart(product, price) {
  cart.push({product, price});
  total += price;
  updateCart();
}

// Function to update the cart display
function updateCart() {
  let cartElement = document.getElementById('cart');
  cart.forEach(item => {
    let li = document.createElement('li');
  });
  document.getElementById('total').innerHTML = total;
}

// Function to clear the cart
function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}
