document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const userType = document.getElementById('user-type').value;
  
    // Placeholder for Firebase registration logic
    // firebaseRegister(email, password).then(() => {
  
    // After successful registration, redirect based on user type
    if (userType === 'donor') {
      window.location.href = 'donor.html';
    } else if (userType === 'receiver') {
      window.location.href = 'receiver.html';
    }
    // }).catch(error => {
    //   document.getElementById('register-message').innerText = 'Registration failed. Please try again.';
    // });
  });
  
    
  
  
