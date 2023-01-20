const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

fetch("json-datei.json")
    .then(response => response.json())
    .then(data => {
        loginForm.addEventListener("submit", e => {
            e.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;

            for(let i = 0; i < data.users.length; i++) {
                if(data.users[i].username === username && data.users[i].password === password) {
                    window.location = 'home.html', "_blank";
                    return;
                }
            }

            loginErrorMsg.style.opacity = 1;
        });
    });
// Passwort Validation -->
var is_visible = false;

function see() {
    var input = document.getElementById("password-field");
    var see = document.getElementById("see");

    if (is_visible) {
        input.type = "password";
        is_visible = false;
        see.style.color = "gray";
    } else {
        input.type = "text";
        is_visible = true;
        see.style.color = "#262626";
    }
}

function check() {
    var input = document.getElementById("password-field").value;

    input = input.trim();
    document.getElementById("password-field").value = input;
    document.getElementById("count").innerText = "Length : " + input.length;
    if (input.length >= 12) {
        document.getElementById("check0").style.color = "green";
    } else {
        document.getElementById("check0").style.color = "red";
    }
    // Grossbuchstaben -->
    if (input.match(/[a-z]/)) {
        document.getElementById("check1").style.color = "green";
    } else {
        document.getElementById("check1").style.color = "red";
    }

    if (input.match(/[0-9]/i)) {
        document.getElementById("check2").style.color = "green";
    } else {
        document.getElementById("check2").style.color = "red";
    }
    // Sonderzeichen -->
    if (input.match(/[^A-Za-z0-9-' ']/i)) {
        document.getElementById("check3").style.color = "green";
    } else {
        document.getElementById("check3").style.color = "red";
    }
    // Grossbuchstabenn -->
    if (input.match(/[A-Z]/)) {
        document.getElementById("check4").style.color = "green";
    } else {
        document.getElementById("check4").style.color = "red";
    }
    if (document.getElementById("check0").style.color === "green" &&
        document.getElementById("check1").style.color === "green" &&
        document.getElementById("check2").style.color === "green" &&
        document.getElementById("check3").style.color === "green" &&
        document.getElementById("check4").style.color === "green" &&
        document.getElementById("text").style.color === "green") {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}

// Email Validation, Version 1 -->
function validation() {
    var form = document.getElementById("login-form");
    var email = document.getElementById("username-field").value;
    var text = document.getElementById("text");
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    <!-- Zeichen noch Anpassen, -->
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Email gültig";
        text.style.color = "green" ;
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Bitte geben Sie eine gültige Email ein.";
        text.style.color = "red" ;
    }
    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
    }


}