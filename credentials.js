
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username ==="admin" && password === "admin") {
        location.href = "\admin.html";
    }
    else if (username ==="Member1" && password === "Member") {
        location.href = "https://site-indol-chi.vercel.app/";
    }
})