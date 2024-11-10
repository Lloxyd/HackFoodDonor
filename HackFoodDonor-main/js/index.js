// index.js (Plain JavaScript Version)

// Function to render the content of the App
function renderApp() {
  // Get the root element
  const rootElement = document.getElementById('root');

  // Create and append the App content (you can modify this to be your app's HTML structure)
  rootElement.innerHTML = 
    <div class="app">
      <h1>Welcome to the Food Donation App</h1>
      <p>This is your food donation platform.</p>
      <button id="donate-btn">Donate Food</button>
    </div>
  ;

  // Add event listeners or further functionality (if needed)
  document.getElementById('donate-btn').addEventListener('click', function() {
    alert('Thank you for your donation!');
  });
}

// Call the render function to display the content
renderApp();
