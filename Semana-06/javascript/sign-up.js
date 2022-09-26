window.addEventListener("load", function() {
//     -Nombre: 
    var name = document.getElementById('name');
// Onblur: Validar si el valor solo tiene letras y si tiene mas de 3 caracteres
    name.addEventListener('blur', validateName);
    var nameErr = ['You have not completed your name'];
    var acceptedChars = 'abcdefghijklmnñopqrstuvwxyz ';
    var acceptedNums = '0123456789';
    var validateMsj = [];
    function validateName() {
        nameErr = [];
        var lowerCase = name.value.toLowerCase();
        if (name.value.length === 0) {
            var paragraph = document.createElement('p');
            name.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Insert your name, please';
            name.classList.remove('green-border');
            nameErr.push('You have not completed your name');
            return false;
        };
        if (name.value.length < 4) {
            var paragraph = document.createElement('p');
            name.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your name has to have more than 3 characters';
            name.classList.remove('green-border');
            nameErr.push('Your name does not exceed 3 characters');
            return false;
        };
        var charactersAmount = 0;
        for (let i = 0; i < lowerCase.length; i++) {
            for (let j = 0; j < acceptedChars.length; j++) {
                if (lowerCase.charAt(i) === acceptedChars.charAt(j)) {
                    charactersAmount++;
                };
            };
        };
        if (charactersAmount !== lowerCase.length) {
            var paragraph = document.createElement('p');
            name.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'You have used non-accepted characters';
            name.classList.remove('green-border');
            nameErr.push('You have used non-accepted characters in your name');
            return false;
        };
        name.classList.add('green-border');
        validateMsj.push('Name: '+name.value);
        return true;
    };
// Onfocus: Desaparecer mensaje de validación .
    name.addEventListener('focus', removeMessage);
    function removeMessage(e) {
        var clicked = e.target;
        if (clicked.nextElementSibling) {
            clicked.parentElement.removeChild(clicked.nextElementSibling);
        };
    };

//     -Apellido:
    var lastname = document.getElementById('lastname');
// Onblur: Validar si el valor solo tiene letras y si tiene mas de 3 caracteres
    lastname.addEventListener('blur', validateLastname);
    var lastnameErr = ['You have not completed your lastname'];
    function validateLastname() {
        lastnameErr = [];
        var lowerCase = lastname.value.toLowerCase();
        if (lastname.value.length === 0) {
            var paragraph = document.createElement('p');
            lastname.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Insert your lastname, please';
            lastname.classList.remove('green-border');
            lastnameErr.push('You have not completed your lastname');
            return false;
        };
        if (lastname.value.length < 4) {
            var paragraph = document.createElement('p');
            lastname.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your lastname has to have more than 3 characters';
            lastname.classList.remove('green-border');
            lastnameErr.push('Your lastname does not exceed 3 characters');
            return false;
        };
        var charactersAmount = 0;
        for (let i = 0; i < lowerCase.length; i++) {
            for (let j = 0; j < acceptedChars.length; j++) {
                if (lowerCase.charAt(i) === acceptedChars.charAt(j)) {
                    charactersAmount++;
                };
            };
        };
        if (charactersAmount !== lowerCase.length) {
            var paragraph = document.createElement('p');
            lastname.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'You have used non-accepted characters';
            lastname.classList.remove('green-border');
            lastnameErr.push('You have used non-accepted characters in your lastname');
            return false;
        };
        lastname.classList.add('green-border');
        validateMsj.push('Lastame: '+lastname.value);
        return true;
    };
// Onfocus: Desaparecer mensaje de validación .
    lastname.addEventListener('focus', removeMessage);

//     -DNI:
    var dni = document.getElementById('dni');
// Onblur: Validar si el valor solo tiene numeros y si tiene mas de 7 caracteres
    dni.addEventListener('blur', validateDNI);
    var dniErr = ['You have not completed your DNI'];
    function validateDNI() {
        dniErr = [];
        if (dni.value.length === 0) {
            var paragraph = document.createElement('p');
            dni.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Insert your DNI, please';
            dni.classList.remove('green-border');
            dniErr.push('You have not completed your DNI');
            return false;
        };
        if (dni.value.length < 8) {
            var paragraph = document.createElement('p');
            dni.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your DNI has to have more than 7 characters';
            dni.classList.remove('green-border');
            dniErr.push('Your DNI does not exceed 7 characters');
            return false;
        };
        var charactersAmount = 0;
        for (let i = 0; i < dni.value.length; i++) {
            for (let j = 0; j < acceptedNums.length; j++) {
                if (dni.value.charAt(i) === acceptedNums.charAt(j)) {
                    charactersAmount++;
                };
            };
        };
        if (charactersAmount !== dni.value.length) {
            var paragraph = document.createElement('p');
            dni.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'You have used non-accepted characters';
            dni.classList.remove('green-border');
            dniErr.push('You have used non-accepted characters in your DNI');
            return false;
        };
        dni.classList.add('green-border');
        validateMsj.push('DNI: '+dni.value);
        return true;
    };
// Onfocus: Desaparecer mensaje de validación .
    dni.addEventListener('focus', removeMessage);

//     -Fecha de Nacimiento:
    var birthDate = document.getElementById('birth-date');
// Formato: dd/mm/aaaa
    birthDate.addEventListener('blur', validateBirthDate);
    var birthDateErr = ['You have not completed your Birth Date'];
    function validateBirthDate() {
        birthDateErr = [];
        if (birthDate.value.length === 0) {
            var paragraph = document.createElement('p');
            birthDate.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Insert your Birth Date, please';
            birthDate.classList.remove('green-border');
            birthDateErr.push('You have not completed your Birth Date');
            return false;
        };
        birthDate.classList.add('green-border');
        validateMsj.push('Birth Date: '+birthDate.value);
        return true;
    };
// Onfocus: Desaparecer mensaje de validación .
    birthDate.addEventListener('focus', removeMessage);

//     -Teléfono:
    var tel = document.getElementById('tel');
// Onblur: Validar si el valor solo tiene numeros y si tiene mas de 10 caracteres
    tel.addEventListener('blur', validateTel);
    var telErr = ['You have not completed your phone number'];
    function validateTel() {
        telErr = []; 
        if (tel.value.length === 0) {
            var paragraph = document.createElement('p');
            tel.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Insert your phone number, please';
            tel.classList.remove('green-border');
            telErr.push('You have not completed your phone number');
            return false;
        };
        var charactersAmount = 0;
        for (let i = 0; i < tel.value.length; i++) {
            for (let j = 0; j < acceptedNums.length; j++) {
                if (tel.value.charAt(i) === acceptedNums.charAt(j)) {
                    charactersAmount++;
                };
            };
        };
        if (charactersAmount !== tel.value.length) {
            var paragraph = document.createElement('p');
            tel.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'You have used non-accepted characters.';
            tel.classList.remove('green-border');
            telErr.push('You have used non-accepted characters in your phone number.');
            return false;
        };
        if (tel.value.length !== 10) {
            var paragraph = document.createElement('p');
            tel.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your phone number has to have  10 characters';
            tel.classList.remove('green-border');
            telErr.push('Your phone number does not have 10 characters');
            return false;
        };
        tel.classList.add('green-border');
        validateMsj.push('Tel: '+tel.value);
        return true;
    };
// Onfocus: Desaparecer mensaje de validación.
    tel.addEventListener('focus', removeMessage);

//     -Dirección:
    var adress = document.getElementById('adress');
// Onblur: Validar si el valor tiene letras, números y un espacio en el medio y si tiene mas de 5 caracteres.
    adress.addEventListener('blur', validateAdress);
    var adressErr = ['You have not completed your name'];
    function validateAdress() {
        adressErr = [];
        var fitAbc = 0;
        var fitNum = 0;
        var lowerCase = adress.value.toLowerCase();
        if (adress.value.length === 0) {
            var paragraph = document.createElement('p');
            adress.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Insert your adress, please';
            adress.classList.remove('green-border');
            adressErr.push('You have no completed your adress');
            return false;
        };
        for (let i = 0; i < lowerCase.length; i++) {      
            for (let j = 0; j < acceptedChars.length; j++) {
                if (acceptedChars.charAt(j) === lowerCase.charAt(i)) {
                    fitAbc++;
                };
            };
            for (let k = 0; k < acceptedNums.length; k++) {
                if (acceptedNums.charAt(k) === lowerCase.charAt(i)) {
                    fitNum++;
                };
            };
        };
        if (fitAbc < 5) {
            var paragraph = document.createElement('p');
            adress.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your adress must have at least 5 characters.';
            adress.classList.remove('green-border');
            adressErr.push('Your adress does not reach 5 characters');
            return false;
        };
        if (fitAbc === 0) {
            var paragraph = document.createElement('p');
            adress.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your adress must have at least one letter.';
            adress.classList.remove('green-border');
            adress.classList.add('inherit-border');
            adressErr.push('Your adress does not contain letters');
            return false;
        } ;
        if (fitNum === 0) {
            var paragraph = document.createElement('p');
            adress.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your adress must have at least one number.';
            adress.classList.remove('green-border');
            adressErr.push('Your adress does not contain numbers');
            return false;
        };
        if (!adress.value.includes(' ')) {
            var paragraph = document.createElement('p');
            adress.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your adress must have at least one blank.';
            adress.classList.remove('green-border');
            adressErr.push('Your adress does not contain blanks');
            return false;
        };
        adress.classList.add('green-border');
        validateMsj.push('Adress: '+adress.value);
        return true;
    };
// Onfocus: Desaparecer mensaje de validación .
    adress.addEventListener('focus', removeMessage);

//     -Localidad:
    var location = document.getElementById('location');
// Onblur: Validar si el valor  solo tiene letras o números y si tiene mas de 3 caracteres.
    location.addEventListener('blur', validateLocation);
    var locationErr = ['You have not completed your location'];
    function validateLocation() {
        locationErr = [];
        var acceptedCharsNums = acceptedChars+acceptedNums;
        var lowerCase = location.value.toLowerCase();
        if (location.value.length === 0) {
            var paragraph = document.createElement('p');
            location.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Insert your location, please';
            location.classList.remove('green-border');
            locationErr.push('You have no completed your location');
            return false;
        };
        if (location.value.length < 4) {
            var paragraph = document.createElement('p');
            location.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your location must have more than 3 characters.';
            location.classList.remove('green-border');
            locationErr.push('Your location does not exceed 3 characters');
            return false;
        };
        var charactersAmount = 0;
        for (let i = 0; i < lowerCase.length; i++) {
            for (let j = 0; j < acceptedCharsNums.length; j++) {
                if (acceptedCharsNums.charAt(j) === lowerCase.charAt(i)) {
                    charactersAmount++;
                };
            };
        };
        if (charactersAmount !== lowerCase.length) {
            var paragraph = document.createElement('p');
            location.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'You have used non-accepted characters.';
            location.classList.remove('green-border');
            locationErr.push('You have used non-accepted characters in your phone number.');
            return false;
        };
        location.classList.add('green-border');
        validateMsj.push('Location: '+location.value);
        return true;
    };
// Onfocus: Desaparecer mensaje de validación .
    location.addEventListener('focus', removeMessage);

// -Código Postal:
    var cp = document.getElementById('cp');
// Onblur: Validar si el valor solo tiene numeros y si tiene 4 o 5 caracteres
    cp.addEventListener('blur', validateCP);
    var cpErr = ['You have not completed your Postal Code'];
    function validateCP() {
        cpErr = [];
        if (cp.value.length === 0) {
            var paragraph = document.createElement('p');
            cp.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Insert your Postal Code, please';
            cp.classList.remove('green-border');
            cpErr.push('You have not completed your Postal Code');
            return false;
        };
        var charactersAmount = 0;
        for (let i = 0; i < cp.value.length; i++) {
            for (let j = 0; j < acceptedNums.length; j++) {
                if (cp.value.charAt(i) === acceptedNums.charAt(j)) {
                    charactersAmount++;
                };
            };
        };
        if (charactersAmount !== cp.value.length) {
            var paragraph = document.createElement('p');
            cp.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'You have used non-accepted characters';
            cp.classList.remove('green-border');
            cpErr.push('You have used non-accepted characters in your Postal Code');
            return false;
        };
        if (cp.value.length !== 4 && cp.value.length !== 5) {
            var paragraph = document.createElement('p');
            cp.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your Postal Code has to have  4 or 5 characters';
            cp.classList.remove('green-border');
            telErr.push('Your Postal Code does not have 4 or 5 characters');
            return false;
        };
        cp.classList.add('green-border');
        validateMsj.push('CP: '+cp.value);
        return true;
    };
// Onfocus: Desaparecer mensaje de validación .
    cp.addEventListener('focus', removeMessage);

//     -Email:
    var email = document.getElementById('email');
// Onblur: Validación REGEX. Si hay un error, mostrar un mensaje.
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
            emailErr.push('You have not completed your email');
            return false;
        };
        if (!emailExpression.test(email.value)) {
            var paragraph = document.createElement('p');
            email.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Wrong email';
            email.classList.remove('green-border');
            emailErr.push('Your email is wrong');
            return false;
        };
        email.classList.add('green-border');
        validateMsj.push('Email: '+email.value);
        return true;
    };

// Onfocus: Desaparecer mensaje de validación .
    email.addEventListener('focus', removeMessage);

//     -Contraseña:
    var psw = document.getElementById('password');
// Onblur: validar si el valor esta formado por letras y números y si tiene al menos 8 caracteres.
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
        };
        for (let i = 0; i < lowerCase.length; i++) {
            for (let j = 0; j < acceptedChars.length; j++) {
                if (acceptedChars.charAt(j) === lowerCase.charAt(i)) {
                    fitAbc++;
                };
            };
            for (let k = 0; k < acceptedNums.length; k++) {
                if (acceptedNums.charAt(k) === lowerCase.charAt(i)) {
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
            pswErr.push('Your password has not contains letters');
            return false;
        } 
        if (fitNum === 0) {
            var paragraph = document.createElement('p');
            psw.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your password must have at least one number.';
            psw.classList.remove('green-border');
            pswErr.push('Your password has not contains numbers');
            return false;
        };
        if (psw.value.length < 9) {
            var paragraph = document.createElement('p');
            psw.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Your password must have more than 8 characters.';
            psw.classList.remove('green-border');
            pswErr.push('Your password does not exceed 8 characters.');
            return false;
        };
        psw.classList.add('green-border');
        validateMsj.push('Password: '+psw.value);
        return true;
    };
// Onfocus: Desaparecer mensaje de validación .
    psw.addEventListener('focus', removeMessage);

//     -Repetir Contraseña:
    var pswConf = document.getElementById('password-confirm');
// Onblur: validar si la el value es igual al valor de contraseña
    pswConf.addEventListener('blur', validatePswConf);
    var pswConfErr = ['You have noy completed your password to confirm it.'];
    function validatePswConf() {
        pswConfErr = [];
        if (psw.value === pswConf.value) {
            pswConf.classList.add('green-border');
            validateMsj.push('Confirmed password: '+pswConf.value);
            return true;
        };
        if (pswConf.value.length === 0) {
            var paragraph = document.createElement('p');
            pswConf.parentElement.appendChild(paragraph);
            paragraph.classList.add('wrong');
            paragraph.innerHTML = 'Repeat your password, please.';
            pswConf.classList.remove('green-border');
            pswConfErr.push('You have not completed your password to confirm it.');
            return false;
        };
        var paragraph = document.createElement('p');
        pswConf.parentElement.appendChild(paragraph);
        paragraph.classList.add('wrong');
        paragraph.innerHTML = 'Your passwords do not match.';
        pswConf.classList.remove('green-border');
        pswConfErr.push('Your passwords do not match.');
        return false;
    };
// Onfocus: Desaparecer mensaje de validación .
    pswConf.addEventListener('focus', removeMessage);

//     -Botón Sign Up:
    var signUpBtn = document.getElementById('sign-up-btn');
// Onclick: Validar si todos los campos anteriores son correctos y alertarlo. En caso de haber errores, mostrarlos en la alerta.
    signUpBtn.addEventListener('click', validateSignUp);
    function validateSignUp(e) {
        e.preventDefault();
        var validateMsjError = nameErr.concat(lastnameErr,dniErr,birthDateErr,telErr,adressErr,locationErr,cpErr,emailErr,pswErr,pswConfErr);
        if (validateMsjError.length !== 0) {
            alert(validateMsjError.join('\n'));
            return;
        };
        alert(validateMsj.join('\n'));
        return;
    };
});