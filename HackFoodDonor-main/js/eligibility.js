document.getElementById('eligibility-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const householdSize = document.getElementById('household-size').value;
    const householdIncome = document.getElementById('household-income').value;
    const incomeThreshold = 50000; // This can vary depending on household size
  
    const eligibilityMessage = document.getElementById('eligibility-message');
    const viewFoodItemsButton = document.getElementById('view-food-items');
  
    // Check eligibility based on household income and display message
    if (householdIncome <= incomeThreshold) {
      eligibilityMessage.textContent = "You are eligible for food donations.";
      eligibilityMessage.style.color = "green";
  
      // Show the "View Food Items" button
      viewFoodItemsButton.style.display = "inline-block";
    } else {
      eligibilityMessage.textContent = "You are not eligible for food donations.";
      eligibilityMessage.style.color = "red";
  
      // Hide the "View Food Items" button if eligibility is not met
      viewFoodItemsButton.style.display = "none";
    }
  });
  
