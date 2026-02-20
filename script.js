// ===== GET ELEMENTS =====
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");

const signupCard = document.getElementById("signupCard");
const successCard = document.getElementById("successCard");
const userEmailText = document.getElementById("userEmail");
const dismissBtn = document.getElementById("dismissBtn");

// ===== EMAIL VALIDATION FUNCTION =====
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== FORM SUBMIT =====
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const email = emailInput.value.trim();

  // ❌ Invalid email
  if (!isValidEmail(email)) {
    errorMsg.textContent = "Valid email required";
    emailInput.classList.add("error-input");
    return;
  }

  // ✅ Valid email
  errorMsg.textContent = "";
  emailInput.classList.remove("error-input");

  // Show success card
  signupCard.style.display = "none";
  successCard.style.display = "block";

  // Display email in success message
  userEmailText.textContent = email;
});

// ===== DISMISS BUTTON =====
dismissBtn.addEventListener("click", function () {
  successCard.style.display = "none";
  signupCard.style.display = "flex";
  emailInput.value = "";
});