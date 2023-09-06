const codes = document.querySelectorAll('.code');
const labelCode = document.getElementById('resend-code');
const btnCancel = document.querySelector('.cancel');
const btnValidate = document.querySelector('.success');

codes[0].focus()
codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) =>{
        if(e.key >= 0 && e.key <= 9){
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
        }
        else if(e.key === 'Backspace'){
            setTimeout(() => {codes[idx - 1].focus(), 10})
        }
    })
})

btnCancel.onclick = (e) => {
    e.preventDefault();
    window.location = "/pages/login/index.html"
}

btnValidate.onclick = (e) => {
    e.preventDefault();
    window.location = "/pages/login/change-password.html"
}

labelCode.addEventListener('click',() =>{
    labelCode.classList.toggle('text-disabled', true)
    labelCode.innerHTML = 'Wait to resend code.';

    setTimeout(() =>{
        labelCode.classList.toggle('text-disabled', false);
        labelCode.innerHTML = 'Click here to resend the code.';
    },10000);
})