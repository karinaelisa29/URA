// signup.js

function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Verificăm dacă câmpurile sunt completate
    if (!email || !password || !confirmPassword) {
      document.getElementById('error-message').innerText = 'Please fill in all fields.';
      return;
    }
  
    // Verificăm dacă parolele coincid
    if (password !== confirmPassword) {
      document.getElementById('error-message').innerText = 'Passwords do not match.';
      return;
    }
  
    // Aici poți adăuga logica pentru a salva datele de înregistrare
    // Poți face o cerere către un server, să folosești o bază de date, etc.
  
    // După ce procesul de înregistrare este complet, poți redirecționa utilizatorul la pagina de autentificare
    alert('Registration successful! You can now sign in.');
    window.location.href = 'signin.html'; // Redirecționează la pagina de autentificare
  }
  