function signin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Verificăm dacă câmpurile sunt completate
    if (!username || !password) {
      document.getElementById('error-message').innerText = 'Please fill in all fields.';
      return;
    }
  
    // Aici poți adăuga logica pentru a verifica autentificarea utilizatorului
    // Compară cu informațiile din baza de date sau sistemul de autentificare
  
    if (username === 'example' && password === 'password') {
      alert('Logged in successfully!');
      window.location.href = 'dashboard.html'; // Redirecționează la pagina de dashboard
    } else {
      document.getElementById('error-message').innerText = 'Invalid username or password.';
    }
  }
  