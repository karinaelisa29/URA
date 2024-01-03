// Funcția de validare a formularului
function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    var emailRegex = /\S+@\S+\.\S+/;
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    // Validare pentru e-mail
    if (!emailRegex.test(email)) {
      alert('Introduceți o adresă de e-mail validă');
      return false;
    }
  
    // Validare pentru parolă
    if (!passwordRegex.test(password)) {
      alert('Parola trebuie să conțină cel puțin 8 caractere, o literă mare și o cifră');
      return false;
    }
  
    // Validare pentru confirmarea parolei
    if (password !== confirmPassword) {
      alert('Parola și confirmarea parolei nu se potrivesc');
      return false;
    }
  
    return true;
  }
  