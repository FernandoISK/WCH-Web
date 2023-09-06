const btnCancel = document.querySelector('.cancel');
const btnSearch = document.querySelector('.success');
const email = document.getElementById('email');

btnCancel.onclick = (e) => {
    e.preventDefault();
    window.location = "/pages/login/index.html"
}

btnSearch.onclick = (e) => {
    if (email.value === 'fernando.cancino@gamasis.com.mx')
        window.location = "/pages/login/validate-code.html";
    else{
        ALERT.show({messenge: "This email not avalibel", type:ALERT.type.danger, slefClosing: true});
        email.classList.add("invalid")
    }
}