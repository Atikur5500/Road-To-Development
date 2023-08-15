const userEmail = document.querySelector('#user-email');
const userPassword = document.querySelector('#user-password');

document.querySelector('#submit-button').addEventListener('click', function(){
    const email = userEmail.value;
    const password = userPassword.value;

    if (email === 'atikur.r.shanto@gmail.com' && password === 'sweetvalley8540') {
        window.location.href = 'calculate.html'
    } else {
        alert('Invalid Input')
    }
    
    userEmail.value = '';
    userPassword.value = '';
})