const button = document.getElementById('save');
const password = document.getElementById("password");
const username = document.getElementById("username");

button.onclick = function (e) {
    e.preventDefault();
    this.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        if (password.value == 'pass' && username.value == 'user')
            window.location.href = window.location.host + '/dashboard.html'
        else {
            ALERT.show({messenge: 'Incorrect username or passwort, try again.', type: ALERT.type.danger})
            this.innerHTML = "Continue";
        }
    }, 2000)
}