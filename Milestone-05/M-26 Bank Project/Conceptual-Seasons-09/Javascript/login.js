document.getElementById('submit-button').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    if (email === 'shanto@gmail.com' && password === 'shanto') {
     window.location.href = 'calculate.html'   
    }else {
        alert('Invalid Input')
    }
    userEmail.value = '';
    userPassword.value = '';
})