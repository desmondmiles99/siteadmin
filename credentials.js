
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "patrick" && password === "admin") {
location.href = "site1.html"
    }
    if (username ==="admin1" && password === "admin") {
        location.href = "headadmin.html"
    }
})