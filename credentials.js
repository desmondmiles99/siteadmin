
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
    else if (username ==="591416926886953009" && password === "591416926886953009") {
        location.href = "591416926886953009.html";
    }
})