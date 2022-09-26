window.addEventListener("load", function() {
//     -Email:
    var email = document.getElementById('email');
// Onblur: validacion REGEX, si hay un error mostrar un mensaje.
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    email.addEventListener('blur', validateEmail);
    var emailErr = ['Email Error! It has not been completed.'];
    var emailCheck = [];
    function validateEmail(){
        emailErr = [];
        emailCheck = [];
        if (email.value.length === 0) {
            var paragraph = document.createElement('p');
            email.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Insert your email, please';
            email.classList.remove('green-border');
            emailErr.push('Email Error! It has not been completed.');
            return false;
        };
        if (!emailExpression.test(email.value)) {
            var paragraph = document.createElement('p');
            email.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Wrong email';
            email.classList.remove('green-border');
            console.log('Email: ' + email.value);
            emailErr.push('Email Error! It does not accomplish the requirements.');
            return false;
        };
        email.classList.add('green-border');
        emailCheck.push('Email: ' + email.value);
        return true;
    };

// Onfocus: desaparecer mensaje en caso de que haya uno.
    email.addEventListener('focus', removeMessage);
    function removeMessage(e) {
        var clicked = e.target;
        if (clicked.nextElementSibling) {
            clicked.parentElement.removeChild(clicked.nextElementSibling);
        }; 
    };

//     -Password:
    var psw = document.getElementById('password');
// Onblur: Validar si el valor contiene números y  letras. Si hay un error, mostrar un mensaje.    
    psw.addEventListener('blur', validatePassword);
    var pswErr = ['Password Error! It has not been completed.'];
    var pswCheck = [];
    var abc = 'abcdefghijklmnñopqrstuvwqyz';
    var num = '0123456789';
    function validatePassword() {
        pswErr = [];
        pswCheck = [];
        var fitAbc = 0;
        var fitNum = 0;
        var lowerCase = psw.value.toLowerCase();
        if (psw.value.length === 0) {
            var paragraph = document.createElement('p');
            psw.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Insert your password, please';
            psw.classList.remove('green-border');
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
            var paragraph = document.createElement('p');
            psw.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your password must have at least one letter.';
            psw.classList.remove('green-border');
            psw.classList.add('inherit-border');
            pswErr.push('Password Error! It has to contain letters.');
            return false;
        } ;
        if (fitNum === 0) {
            var paragraph = document.createElement('p');
            psw.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your password must have at least one number.';
            psw.classList.remove('green-border');
            console.log('Password: ' + psw.value);
            pswErr.push('Password Error! It has to contain numbers.');
            return false;
        };
        if (lowerCase.length) {
            
        }
        psw.classList.add('green-border');
        pswCheck.push('Password: ' + psw.value);
        return true;
    };

// Onfocus: Desaparecer mensaje de validación .
    psw.addEventListener('focus', removeMessage);

//     -Login:
    var logBtn = document.getElementById('login-button');
// Onsubmit: Validar si email  contraseña son correctos y alertarlo. En caso de haber errores, mostrarlos en la alerta.
    logBtn.addEventListener('click', validateLogin);
    function validateLogin(e) {
        e.preventDefault();
        var validateMsjError = emailErr.concat(pswErr);
        if (validateMsjError.length !== 0) {
            alert(validateMsjError.join('\n'));
            return;
        };
        var validateMsjCheck = emailCheck.concat(pswCheck);
        alert(validateMsjCheck.join('\n'));
        return;
    };
});