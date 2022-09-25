window.addEventListener("load", function() {
    // LOGIN
    // VALIDACION EMAIL
    // Onblur: validacion REGEX, si hay un error mostrar un mensaje.

    var email = document.getElementById('email');

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    email.addEventListener('blur', validateEmail);

    var emailErr = ['You have not completed your email'];

    function validateEmail(){
        emailErr = [];

        if (email.value.length === 0) {
            var paragraph = document.createElement('p');
            email.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Insert your email, please';
            email.classList.remove('green-border');
            emailErr.push('You have not completed your email')
            return false
        }
        if (!emailExpression.test(email.value)) {
            var paragraph = document.createElement('p');
            email.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Wrong email';
            email.classList.remove('green-border');
            console.log('Email: ' + email.value);
            emailErr.push('Your email is wrong')
            return false;
        }
        email.classList.add('green-border');
        console.log('Email: ' + email.value);
        return true;
    };

    // Onfocus: desaparecer mensaje en caso de que haya uno.

    email.addEventListener('focus', removeMessage);

    function removeMessage(e) {
        var clicked = e.target;
        if (clicked.nextElementSibling) {
            clicked.parentElement.removeChild(clicked.nextElementSibling);
        } 
    };


    // VALIDACION CONTRASEÑA
    // Onblur: Validar si el valor contiene números y  letras. Si hay un error, mostrar un mensaje.

    var psw = document.getElementById('password');
    var abc = 'abcdefghijklmnñopqrstuvwqyz';
    var num = '0123456789';

    psw.addEventListener('blur', validatePassword);

    var pswErr = ['You have not completed your password'];

    function validatePassword() {
        pswErr = [];
        var fitAbc = 0;
        var fitNum = 0;
        var lowerCase = psw.value.toLowerCase();

        if (psw.value.length === 0) {
            var paragraph = document.createElement('p');
            psw.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Insert your password, please';
            psw.classList.remove('green-border');
            pswErr.push('You have no completed your password');
            return false;
        }
        for (let i = 0; i < lowerCase.length; i++) {
            
            for (let j = 0; j < abc.length; j++) {
                if (abc.charAt(j) === lowerCase.charAt(i)) {
                    fitAbc++;
                }
            }
            for (let k = 0; k < num.length; k++) {
                if (num.charAt(k) === lowerCase.charAt(i)) {
                    fitNum++;
                }
            }
        }
        if (fitAbc === 0) {
            var paragraph = document.createElement('p');
            psw.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your password must have at least one letter.';
            psw.classList.remove('green-border');
            psw.classList.add('inherit-border');
            pswErr.push('Your password has not contains letters')
            return false;
        } 
        if (fitNum === 0) {
            var paragraph = document.createElement('p');
            psw.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your password must have at least one number.';
            psw.classList.remove('green-border');
            console.log('Password: ' + psw.value);
            pswErr.push('Your password has not contains numbers')
            return false;
        }
        psw.classList.add('green-border');
        console.log('Password: ' + psw.value);
        return true;
    }

    // Onfocus: Desaparecer mensaje de validación .

    psw.addEventListener('focus', removeMessage);

    // VALIDACION LOGIN
    // Onsubmit: Validar si email  contraseña son correctos y alertarlo. En caso de haber errores, mostrarlos en la alerta.

    var logBtn = document.getElementById('login-button');

    logBtn.addEventListener('click', validateLogin);

    function validateLogin(e) {
        e.preventDefault();
        if (emailErr.length !== 0 && pswErr.length !== 0) {
            alert(emailErr+'\n'+pswErr);
            location.reload();
            return;
        }
        if (emailErr.length !== 0) {
            alert(emailErr);
            location.reload();
            return;
        }
        if (pswErr.length !== 0) {
            alert(pswErr);
            location.reload();
            return;
        }
        alert('Email: '+email.value+'\nPassword: '+psw.value);
        return;
    }
});