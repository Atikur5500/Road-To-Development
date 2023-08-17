document.getElementById('submit-button').addEventListener('click', function(){
    const userEmail = document.querySelector('#user-email');
    const email = userEmail.value;
    const userPassword = document.querySelector('#user-password');
    const password = userPassword.value;
    if (email === 'atikur.r.shanto@gmail.com' && password === 'atikur') {
        window.location.href = 'calculate.html'
    } else {
        alert('Invalid Input')
    }
    userEmail.value = '';
    userPassword.value = '';
})