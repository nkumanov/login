function parseInput() {
    let data = {}
    document.addEventListener('click', (ev) => {
        if (ev.target.id == 'loginSubmit') {
            ev.preventDefault();
            data['email'] = document.getElementById('userEmail').value
            data['password'] = document.getElementById('userPassword').value
            validate(data)
        }
    })
}
function validate(data) {
    let emailInput = document.getElementById('userEmail');
    let passwordInput = document.getElementById('userPassword');


    emailInput.style.border = ''
    passwordInput.style.border = ''
    if (data.email !== 'hello@ab.bg') {
        emailInput.style.border = '1px solid red'
        passwordInput.value = ''
    } else if (data.password !== '1234') {
        passwordInput.style.border = '1px solid red'
        passwordInput.value = ''

    } else {
        emailInput.value = ''
        passwordInput.value = ''
        console.log(data);
        alert('You have logged in!')
    }

}
parseInput()
