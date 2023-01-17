const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

<!-- Hier wird die Json-Datei eingebunden!!! -->

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


fetch('json-datei.json')
    .then(response => response.json())
    .then(data => {

        <!-- if & else prüfen Passwort  -->
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if(data.username === username && data.password === password){
            loginButton.disabled = false;
            window.location = 'home.html', "_blank";
        }else{
            loginButton.disabled = true;
            loginErrorMsg.style.opacity = 1;
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
});
