document.getElementById('login-submit').addEventListener('click', function () {
    // console.log('hello')

    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user password
    const passwordField = document.getElementById('user-password');

    // check email & password
    const userPassword = passwordField.value;
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        // console.log('valid user');
        window.location.href = 'banking.html';
    }
    else {
        alert('Hey buddy! give me valid credentials');
        window.location.reload();
    }
})