document.getElementById('donor-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const foodName = document.getElementById('food-name').value;
    const quantity = document.getElementById('quantity').value;
    const expirationDate = document.getElementById('expiration-date').value;
  
    const newItem = { foodName, quantity, expirationDate };
  
    // Placeholder for Firebase function to add the item
    // firebaseAddItem(newItem);
  
    document.getElementById('donor-form').reset();
    displayFoodItem(newItem);  // Display added item locally for now
  });
  
  function displayFoodItem(item) {
    const foodList = document.getElementById('food-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${item.foodName} - Quantity: ${item.quantity} - Expires on: ${item.expirationDate}`;
    foodList.appendChild(listItem);
  }
  
