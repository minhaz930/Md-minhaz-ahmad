// Show login modal
function showLogin() {
  document.getElementById("loginModal").style.display = "block";
}

// Close login modal
function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

// Handle login form
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Login successful!");
  closeLogin();
});

// Handle contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted!");
  this.reset();
});
