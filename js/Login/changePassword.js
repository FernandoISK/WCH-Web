const firstPassword = document.getElementById('Fpassword');
const secondPassword = document.getElementById('Spassword');
const spanCharacters = document.getElementById('characters');
const spanNumbers = document.getElementById('numbers');
const spanSpecific = document.getElementById('specific');
const spanCase = document.getElementById('case');
const btnSave = document.getElementById('save');

function validatePassword(password) {
    const hasMinimumCharacters = password.length > 8;
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#$%^&*.,_-]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);

    spanCharacters.innerHTML = hasMinimumCharacters ? '✔ ' : '✖ ';
    spanNumbers.innerHTML = hasNumbers ? '✔ ' : '✖ ';
    spanSpecific.innerHTML = hasSpecialChars ? '✔ ' : '✖ ';
    spanCase.innerHTML = hasUpperCase ? '✔ ' : '✖ ';

    spanCharacters.classList.toggle('valid-option', hasMinimumCharacters);
    spanNumbers.classList.toggle('valid-option', hasNumbers);
    spanSpecific.classList.toggle('valid-option', hasSpecialChars);
    spanCase.classList.toggle('valid-option', hasUpperCase);

    return hasMinimumCharacters && hasNumbers && hasSpecialChars && hasUpperCase;
}

firstPassword.addEventListener('keyup', (event) => {
    const canSave = validatePassword(event.target.value);
    secondPassword.disabled = !canSave;
});

secondPassword.addEventListener('keyup', (event) => {
    if (secondPassword.value === firstPassword.value)
        btnSave.disabled = false;
    else
        btnSave.disabled = true;
});


btnSave.onclick = () =>{
    window.location = "/pages/login/index.html";
}
