// Funcționalitate pentru Sign Up
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      // Redirect către pagina de autentificare
      window.location.href = '/';
    })
    .catch(error => console.error('Error:', error));
  });
  
  // Funcționalitate pentru Sign In
  document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      // Redirect către pagina de dashboard după autentificare
      window.location.href = '/dashboard';
    })
    .catch(error => console.error('Error:', error));
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Funcționalitate pentru Sign Up
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
          // Redirect către pagina de autentificare
          window.location.href = '/';
        })
        .catch(error => console.error('Error:', error));
      });
    }
  
    // Funcționalitate pentru Sign In
    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
      signinForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        fetch('/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
          // Redirect către pagina de dashboard după autentificare
          window.location.href = '/dashboard';
        })
        .catch(error => console.error('Error:', error));
      });
    }
  });
  