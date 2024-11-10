function renderReceiverPage() {
    const receiverHTML = `
      <h2>Receiver Page</h2>
      <button onclick="navigateTo('/food-list')">View Food List</button>
      <div id="eligibility-message"></div>
    `;
    document.getElementById('app').innerHTML = receiverHTML;
  }
  