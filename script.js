// Function to add product details to the cart
function addToCart(productName, description, price) {
  let cartData = localStorage.getItem('cart'); // Get the cart data from local storage

  // If cart data does not exist, initialize an empty array
  if (!cartData) {
    cartData = [];
  } else {
    cartData = JSON.parse(cartData); // Parse the cart data from JSON to an array
  }

  // Add the product details to the cart array
  cartData.push({
    name: productName,
    description: description,
    price: price
  });

  // Save the updated cart data back to local storage
  localStorage.setItem('cart', JSON.stringify(cartData));

  // Redirect to cart.html after adding to cart
  window.location.href = 'cart.html';
}

