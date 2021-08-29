
function parseInput() {
    let data = {}
    document.addEventListener('click', (ev) => {
        if (ev.target.id == 'registerSubmit') {
            ev.preventDefault();
            data['userEmail'] = document.getElementById('userEmail').value
            data['userPassword'] = document.getElementById('userPassword').value
            data['firstName'] = document.getElementById('firstName').value
            data['lastName'] = document.getElementById('lastName').value
            data['confirmPass'] = document.getElementById('confirmPass').value
            data['terms'] = document.getElementById('terms').checked
            data['requirements'] = document.getElementById('requirements').checked
            validate(data)
        }
    })
}
function validate(data) {
    let userInputFields = {
        'firstName': document.getElementById('firstName'),
        'lastName': document.getElementById('lastName'),
        'userEmail': document.getElementById('userEmail'),
        'userPassword': document.getElementById('userPassword'),
        'confirmPass': document.getElementById('confirmPass'),
        'terms': document.getElementById('terms'),
        'requirements': document.getElementById('requirements'),
    }

    let validInputs = {
        'names': new RegExp(/^[a-zA-Z]+(\s*\w+)*$/),
        'email': new RegExp(/\w+@[a-z]+[.][a-z]+/, 'i'),
        'password': new RegExp(/[A-Za-z0-9]*[0-9]+/),
    }


    Object.values(userInputFields).map(x => x.style.border = '')

    if (validInputs.names.test(data.firstName) != true) {
        displayErrorField(userInputFields.firstName)
    } else {
        removeErrorField(userInputFields.firstName)

    }

    if (validInputs.names.test(data.lastName) != true) {
        displayErrorField(userInputFields.lastName)
    } else {

        removeErrorField(userInputFields.lastName)
    }

    if (validInputs.email.test(data.userEmail) != true) {
        displayErrorField(userInputFields.userEmail)
    } else {
        removeErrorField(userInputFields.userEmail)
    }

    if (validInputs.password.test(data.userPassword) != true) {
        displayErrorField(userInputFields.userPassword)
    } else {
        removeErrorField(userInputFields.userPassword)
    }

    if (userInputFields.userPassword.value !== userInputFields.confirmPass.value) {
        displayErrorField(userInputFields.confirmPass)
    } else {
        removeErrorField(userInputFields.confirmPass)
    }

    if (Array.from(document.querySelectorAll('#validationError')).length == 0) {
        document.querySelector('.form-section').innerHTML = `<p class='welcome'>Welcome</p>`
        console.log(data);
    }


}

function displayErrorField(inputField) {
    let alertErrors = {
        'userEmail': 'Please enter valid email!',
        'userPassword': 'Please enter password between 6 and 25 symbols. At least one letter(latin) and one digit',
        'confirmPass': 'Passwords do not match!',
        'firstName': 'Please enter name between 2 and 20 symbols. Latin letters only.',
        'lastName': 'Please enter name between 2 and 20 symbols. Latin letters only.',
        'checkBox': '',
    }
    inputField.style.border = '1px solid red'
    if (inputField.parentNode.lastChild.id != 'validationError') {
        let errorField = document.createElement('span')
        errorField.textContent = alertErrors[inputField.id]
        errorField.setAttribute('id', 'validationError')
        inputField.parentNode.appendChild(errorField)
    }
}
function removeErrorField(inputField) {
    if (inputField.parentNode.lastChild.id == 'validationError')
    inputField.parentNode.removeChild(inputField.parentNode.lastChild)
}

parseInput()
