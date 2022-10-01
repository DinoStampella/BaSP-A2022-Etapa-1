window.addEventListener("load", function() {
// REUSABLE
    function validateInput(input, txt) {
        var paragraph = document.createElement('p');
        input.parentElement.appendChild(paragraph);
        paragraph.classList.add('wrong');
        paragraph.innerHTML = txt;
        input.classList.remove('green-border');
    };
    function removeMessage(e) {
        var clicked = e.target;
        if (clicked.nextElementSibling) {
            clicked.parentElement.removeChild(clicked.nextElementSibling);
        };
    };

//     -Email:
    var email = document.getElementById('email');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailErr = ['Email Error! It has not been completed.'];
    function validateEmail(){
        emailErr = [];
        emailCheck = [];
        if (email.value.length === 0) {
            validateInput(email,'Insert your email, please');
            emailErr.push('Email Error! It has not been completed.');
            return false;
        };
        if (!emailExpression.test(email.value)) {
            validateInput(email,'Wrong email');
            emailErr.push('Email Error! It does not accomplish the requirements.');
            return false;
        };
        email.classList.add('green-border');
        emailCheck.push('Email: ' + email.value);
        return true;
    };
    email.addEventListener('blur', validateEmail);
    email.addEventListener('focus', removeMessage);

//     -Password:
    var psw = document.getElementById('password');  
    var pswErr = ['Password Error! It has not been completed.'];
    var abc = 'abcdefghijklmnñopqrstuvwqyz';
    var num = '0123456789';
    function validatePassword() {
        pswErr = [];
        pswCheck = [];
        var fitAbc = 0;
        var fitNum = 0;
        var lowerCase = psw.value.toLowerCase();
        if (psw.value.length === 0) {
            validateInput(psw,'Insert your password, please')
            pswErr.push('Password Error! It has not been completed.');
            return false;
        };
        for (let i = 0; i < lowerCase.length; i++) {       
            for (let j = 0; j < abc.length; j++) {
                if (abc.charAt(j) === lowerCase.charAt(i)) {
                    fitAbc++;
                };
            };
            for (let k = 0; k < num.length; k++) {
                if (num.charAt(k) === lowerCase.charAt(i)) {
                    fitNum++;
                };
            };
        };
        if (fitAbc === 0) {
            validateInput(psw,'Your password must have at least one letter.')
            pswErr.push('Password Error! It has to contain letters.');
            return false;
        } ;
        if (fitNum === 0) {
            validateInput(psw,'Your password must have at least one number.')
            pswErr.push('Password Error! It has to contain numbers.');
            return false;
        };
        if (lowerCase.length !== fitAbc+fitNum) {
            validateInput(psw,'Your password has non-accepted characters (It accepts only letter and numbers).')
            pswErr.push('Password Error!  It contains non-accepted characters.');
            return false;
        }
        psw.classList.add('green-border');
        pswCheck.push('Password: ' + psw.value);
        return true;
    };
    psw.addEventListener('blur', validatePassword);
    psw.addEventListener('focus', removeMessage);

//     -Login:
    var logBtn = document.getElementById('login-button');
    function validateLogin(e) {
        e.preventDefault();
        var validateMsjError = emailErr.concat(pswErr);
        if (validateMsjError.length !== 0) {
            alert(validateMsjError.join('\n'));
            return;
        };
        var validateMsjCheck = emailCheck.concat(pswCheck);
        alert(validateMsjCheck.join('\n'));
        var inputs = document.querySelectorAll('#form-login input')
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('green-border');
        }
        var paragraph = document.createElement('p');
            logBtn.parentElement.appendChild(paragraph);
            paragraph.classList.add('submited')
            paragraph.innerHTML = 'Submited';
        setTimeout(function formSubmited() {
            logBtn.parentElement.removeChild(paragraph);
        },1000)
        document.getElementById('form-login').reset();
    };
    logBtn.addEventListener('click', validateLogin);
});