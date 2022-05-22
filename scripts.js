let primaryPasswordInput = document.getElementById("password");
let secondaryPasswordInput = document.getElementById("confirm_password");

function passwordsMatch() {
    return primaryPasswordInput.value === secondaryPasswordInput.value;
}

function setPasswordMismatchError() {
    primaryPasswordInput.classList.add('error');
    secondaryPasswordInput.classList.add('error');
    let passwordMismatchSpan = document.querySelector('span.error');
    passwordMismatchSpan.textContent = "* Passwords do not match";
}

function removePasswordMismatchError() {
    primaryPasswordInput.classList.remove('error');
    secondaryPasswordInput.classList.remove('error');
    document.querySelector('span.error').textContent = '';
}

primaryPasswordInput.addEventListener("keydown", (e) => {
    passwordsMatch() ? removePasswordMismatchError() : setPasswordMismatchError()
});

secondaryPasswordInput.addEventListener("keydown", (e) => {
    passwordsMatch() ? removePasswordMismatchError() : setPasswordMismatchError()
});