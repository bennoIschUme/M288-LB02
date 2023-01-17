const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user@gmail.com" && password === "Bzz_ict12345") {
        loginButton.disabled = false;
        window.location = 'home.html', "_blank";
    } else {
        loginButton.disabled = true;
        loginErrorMsg.style.opacity = 1;
    }


})