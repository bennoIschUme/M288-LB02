const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

form.addEventListener("submit", function(event) {
    event.preventDefault();
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        window.open("http://localhost:63342/M288-LB02/home.html?_ijt=mjvjg11a1bhnckf3hod65kfmvj&_ij_reload=RELOAD_ON_SAVE", "_blank");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})