// Function to display cart items
function displayCartItems() {
    const cartList = document.getElementById('cart-list');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cartList.innerHTML = ''; // Clear list
  
    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${item.foodName} - Quantity: ${item.quantity}</span>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartList.appendChild(listItem);
    });
  }
  
  // Function to remove an item from the cart
  function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
  }
  
  // Function to handle checkout
  function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Deduct items from food list quantities
    cart.forEach(cartItem => {
      const foodItem = foodItems.find(item => item.id === cartItem.id);
      if (foodItem) {
        foodItem.quantity -= cartItem.quantity;
        if (foodItem.quantity < 0) foodItem.quantity = 0;
      }
    });
  
    localStorage.removeItem('cart'); // Clear the cart after checkout
    alert('Checkout successful! Thank you for your order.');
    displayCartItems(); // Refresh cart view
  }
  
  displayCartItems();
  
  
