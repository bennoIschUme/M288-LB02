const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// JSON-Daten einbinden, direkt als Javascript
const data = {
    "username": "user@gmail.com",
    "password": "Bzz_Ict12345",

    "username2": "user2@gmail.com",
    "password2": "Bzz_Ict54321",

    "username3": "user3@gmail.com",
    "password3": "Bzz_Ict67890",

    "username4": "user4@gmail.com",
    "password4": "Bzz_Ict09876",

    "username5": "user5@gmail.com",
    "password5": "Bzz_Ict246810",
}

loginForm.addEventListener("submit", e => {
    e.preventDefault();

    // Prüfen von Nutzername und Passwort
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(data.username === username && data.password === password||
        data.username2 === username && data.password2 === password||
        data.username3 === username && data.password3 === password||
        data.username4 === username && data.password4 === password||
        data.username5 === username && data.password5 === password) {
        // Anmeldung erfolgreich
        window.location = 'home.html', "_blank";
    } else {
        // Anmeldung fehlgeschlagen
        loginErrorMsg.style.opacity = 1;
    }
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