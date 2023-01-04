document.getElementById('login-submit').addEventListener('click', function () {
    //get email
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value;

    //get password
    const userField = document.getElementById('user-password')
    const userPassword = userField.value;


    if (userEmail == 'abc@gmail.com' && userPassword == '1234') {
        window.location.href = 'bank.html'
    }
})
