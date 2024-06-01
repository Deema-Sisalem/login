
// var signupName = document.getElementById('userName')
// var signupEmail = document.getElementById('signEmail')
// var signupPassword = document.getElementById('signPass')
// var loginEmail = document.getElementById('loginEmail')
// var loginPass = document.getElementById('loginPass')


var userNameInput = document.getElementById('userName');
var emailInput = document.getElementById('signEmail');
var passwordInput = document.getElementById('signPass');
var loginEmailInput = document.getElementById('loginEmail');
var loginPasswordInput = document.getElementById('loginPass');
var loginErrorText = document.getElementById('loginError');
var usernameText = document.getElementById('username');
var loginContainer = document.getElementById('loginContainer');
var homePageContainer = document.getElementById('homePage');
var registerForm = document.getElementById('registerForm');
var loginForm = document.getElementById('loginForm');

function showRegisterForm() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
}

function showLoginForm() {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
}

function register() {
    var userName = userNameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    if (localStorage.getItem(email)) {
        document.getElementById('emailError').innerText = 'Email is already used please use another one';
        return;
    }

    // Valid email
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        return;
    }

    // seeeeeeet local storage important (study again)
    localStorage.setItem(email, JSON.stringify({ name: userName, password: password }));

    // to open login , clears everything
    userNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    showLoginForm();
}

function login() {
    var email = loginEmailInput.value;
    var password = loginPasswordInput.value;

    var userData = localStorage.getItem(email);

    if (!userData) {
        loginErrorText.innerText = 'No account found with this email.';
        return;
    }

    userData = JSON.parse(userData);

    if (userData.password !== password) {
        loginErrorText.innerText = 'Incorrect password.'
        return;
    }

    // Successful login
    usernameText.innerText = userData.name;
    loginErrorText.innerText = '';
    loginEmailInput.value = '';
    loginPasswordInput.value = '';

    loginContainer.style.display = 'none';
    homePageContainer.style.display = 'block';
}

function logout() {
    homePageContainer.style.display = 'none';
    loginContainer.style.display = 'block';
}
