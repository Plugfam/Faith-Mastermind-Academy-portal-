```javascript 
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Dummy login validation
document.querySelector('.auth-forms').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Dummy signup process
  alert('Signup successful! Please log in.');
});

document.getElementById('logoutBtn').addEventListener('click', function() {
  document.getElementById('dashboard').classList.add('hidden');
  document.querySelector('.auth-forms').classList.remove('hidden');
});
```
