const form = document.getElementById("login-form");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = passwordInput.value;
  if (password === "12345678") {
    window.location.href = "sucsess.html";
  } else {
    alert("Invalid password. Please try again.");
  }
});
