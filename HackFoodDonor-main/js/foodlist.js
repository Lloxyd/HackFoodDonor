// Placeholder for available food items
const foodItems = [
    { id: 1, foodName: "Apples", quantity: 10, expirationDate: "2024-12-01" },
    { id: 2, foodName: "Bananas", quantity: 5, expirationDate: "2024-11-20" },
    // Add more items as needed
  ];
  
  // Function to display food items
  function displayFoodItems() {
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = ''; // Clear list
  
    foodItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${item.foodName} - Available: ${item.quantity} - Expires on: ${item.expirationDate}</span>
        <input type="number" id="quantity-${item.id}" min="1" max="${item.quantity}" placeholder="Quantity">
        <button onclick="addToCart(${item.id})">Add to Cart</button>
      `;
      foodList.appendChild(listItem);
    });
  }
  
  // Function to add an item to the cart
  function addToCart(itemId) {
    const item = foodItems.find(i => i.id === itemId);
    const quantityInput = document.getElementById(`quantity-${itemId}`);
    const quantity = parseInt(quantityInput.value, 10);
  
    if (isNaN(quantity) || quantity <= 0 || quantity > item.quantity) {
      alert(`Please enter a valid quantity for ${item.foodName}`);
      return;
    }
  
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(i => i.id === itemId);
  
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ id: item.id, foodName: item.foodName, quantity });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    item.quantity -= quantity; // Update the available quantity
    displayFoodItems(); // Refresh the food list to show updated quantities
  }
  
  displayFoodItems();
  
  
