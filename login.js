function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "Preethi" && pass === "1234") {
    localStorage.setItem("loggedIn", "true");

    // 👉 Redirect to mood app
    window.location.href = "index.html";
  } else {
    document.getElementById("error").textContent = "Invalid login";
  }
}