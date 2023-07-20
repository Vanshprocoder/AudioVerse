// Function to calculate total bill and display cart contents
function displayCart() {
  let cartData = localStorage.getItem('cart'); // Get the cart data from local storage

  // If cart data does not exist, initialize an empty array
  if (!cartData) {
    cartData = [];
  } else {
    cartData = JSON.parse(cartData); // Parse the cart data from JSON to an array
  }

  const cartItemsDiv = document.getElementById('cart-items');
  const totalBillDiv = document.getElementById('total-bill');

  // Clear previous cart items and total bill display
  cartItemsDiv.innerHTML = '';
  totalBillDiv.innerHTML = '';

  let totalBill = 0;
  let totalItems = 0;

  // Loop through each item in the cart and display it
  cartData.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p>Price: ₹ ${item.price}</p>
    `;
    cartItemsDiv.appendChild(itemDiv);

    totalBill += item.price;
    totalItems += 1;
  });

  // Calculate discount and other details
  const discount = 100;
  const deliveryCharges = 0;
  const payableBill = totalBill - discount;

  // Display the total bill and other details
  totalBillDiv.innerHTML = `
    Total items: ${totalItems} <br>
    Price details: ₹ ${totalBill} <br>
    Discount: ₹ ${discount} <br>
    Delivery charges: ₹ ${deliveryCharges} <br>
    Total Payable Bill: ₹ ${payableBill}
  `;
}

// Call the displayCart function when the cart.html page loads
window.onload = displayCart;
