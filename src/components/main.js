document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submit');
    

    // DI GUMAGANA E HAHAHAHAHA
    // var emailInput = document.getElementById('email');
    // var passwordInput = document.getElementById('password');

    // if(emailInput.value === emailInput || passwordInput.value === passwordInput) {
    //     alert("Login Successful!");
    //     return;
    // }

    submitBtn.addEventListener('click', function() {
        window.location.href = '/dashboard.html';
    });
});