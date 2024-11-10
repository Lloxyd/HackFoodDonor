document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const userType = document.getElementById('user-type').value;
  
    // Placeholder for Firebase login logic
    // firebaseLogin(email, password).then(() => {
  
    // After successful login, redirect based on user type
    if (userType === 'donor') {
      window.location.href = 'donor.html';
    } else if (userType === 'receiver') {
      window.location.href = 'receiver.html';
    }
    // }).catch(error => {
    //   document.getElementById('login-message').innerText = 'Login failed. Please try again.';
    // });
  });
  
