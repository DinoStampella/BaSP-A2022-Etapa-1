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

//     -Name: 
    var name = document.getElementById('name');
    var nameErr = ['Name Error! It has not been completed.'];
    var nameCheck = [localStorage.getItem('name')];
    if (localStorage.getItem('name') !== null) {
        name.setAttribute('value', localStorage.getItem('name'));
        nameErr = [];
    };
    var acceptedChars = 'abcdefghijklmnñopqrstuvwxyz ';
    var acceptedNums = '0123456789';
    function validateName() {
        nameErr = [];
        nameCheck = [];
        var lowerCase = name.value.toLowerCase();
        if (name.value.length === 0) {
            validateInput(name,'Insert your name, please');
            nameErr.push('Name Error! It has not been completed.');
            return false;
        };
        if (name.value.length < 4) {
            validateInput(name,'Your name has to have more than 3 characters');
            nameErr.push('Name Error! It has to have more than 3 characters');
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
            validateInput(name,'You have used non-accepted characters (It accepts only letters).');
            nameErr.push('Name Error! It contains non-accepted characters');
            return false;
        };
        name.classList.add('green-border');
        nameCheck.push('Name: '+name.value);
        return true;
    };
    name.addEventListener('blur', validateName);
    name.addEventListener('focus', removeMessage);

//     -Lastname:
    var lastname = document.getElementById('lastname');
    var lastnameErr = ['Lastname Error! It has not been completed.'];
    var lastnameCheck = [localStorage.getItem('lastName')];
    if (localStorage.getItem('lastName') !== null) {
        lastname.setAttribute('value', localStorage.getItem('lastName'));
        lastnameErr = [];
    };
    function validateLastname() {
        lastnameErr = [];
        lastnameCheck = [];
        var lowerCase = lastname.value.toLowerCase();
        if (lastname.value.length === 0) {
            validateInput(lastname,'Insert your lastname, please');
            lastnameErr.push('Lastname Error! It has not been completed.');
            return false;
        };
        if (lastname.value.length < 4) {
            validateInput(lastname,'Your lastname has to have more than 3 characters');
            lastnameErr.push('Lastname Error! It has to have more then 3 characters');
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
            validateInput(lastname,'You have used non-accepted characters (it accepts only letters)');
            var paragraph = document.createElement('p');
            lastnameErr.push('Lastname Error! It contains non-accepted characters');
            return false;
        };
        lastname.classList.add('green-border');
        lastnameCheck.push('Lastame: '+lastname.value);
        return true;
    };
    lastname.addEventListener('blur', validateLastname);
    lastname.addEventListener('focus', removeMessage);

//     -DNI:
    var dni = document.getElementById('dni');
    var dniErr = ['DNI Error! It has not been completed.'];
    var dniCheck = [localStorage.getItem('dni')];
    if (localStorage.getItem('dni') !== null) {
        dni.setAttribute('value', localStorage.getItem('dni'));
        dniErr = [];
    };
    function validateDNI() {
        dniErr = [];
        dniCheck = [];
        if (dni.value.length === 0) {
            validateInput(dni,'Insert your DNI, please');
            dniErr.push('DNI Error! It has not been completed.');
            return false;
        };
        if (dni.value.length < 8) {
            validateInput(dni,'Your DNI has to have more than 7 characters');
            dniErr.push('DNI Error! It has to have more then 7 characters');
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
            validateInput(dni,'You have used non-accepted characters (It accepts only number).');
            dniErr.push('DNI Error! It contains non-accepted characters.');
            return false;
        };
        dni.classList.add('green-border');
        dniCheck.push('DNI: '+dni.value);
        return true;
    };
    dni.addEventListener('blur', validateDNI);
    dni.addEventListener('focus', removeMessage);

//     -Fecha de Nacimiento:
    var birthDate = document.getElementById('birth-date');
    var birthDateErr = ['Birth Date Error! It has not been completed.'];
    var birthDateCheck = [localStorage.getItem('dob')];
    if (localStorage.getItem('dob') !== null) {
        var localStorgeDob = localStorage.getItem('dob');
        var year = localStorgeDob.substring(6,10);
        var month = localStorgeDob.substring(0,2);
        var day = localStorgeDob.substring(3,5)
        var valueBod = year+'-'+month+'-'+day;
        birthDate.setAttribute('value', valueBod);
        birthDateErr = [];
    };
    function validateBirthDate() {
        birthDateErr = [];
        birthDateCheck = [];
        if (birthDate.value.length === 0) {
            validateInput(birthDate,'Insert your Birth Date, please');
            var paragraph = document.createElement('p');
            birthDateErr.push('Birth Date Error! It has not been completed.');
            return false;
        };
        birthDate.classList.add('green-border');
        birthDateCheck.push('Birth Date: '+birthDate.value);
        return true;
    };
    birthDate.addEventListener('blur', validateBirthDate);
    birthDate.addEventListener('focus', removeMessage);

//     -Telephone number:
    var tel = document.getElementById('tel');
    var telErr = ['Phone number Error! It has not been completed.'];
    var telCheck = [localStorage.getItem('phone')];
    if (localStorage.getItem('phone') !== null) {
        tel.setAttribute('value', localStorage.getItem('phone'));
        telErr = [];
    };
    function validateTel() {
        telErr = []; 
        telCheck = [];
        if (tel.value.length === 0) {
            validateInput(tel,'Insert your phone number, please');
            telErr.push('Phone number Error! It has not been completed.');
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
            validateInput(tel,'You have used non-accepted characters (It accepts only numbers).');
            telErr.push('Phone number Error! It contains non-accepted characters.');
            return false;
        };
        if (tel.value.length !== 10) {
            validateInput(tel,'Your phone number has to have  10 characters');
            telErr.push('Phone number Error! It has to have 10 characters.');
            return false;
        };
        tel.classList.add('green-border');
        telCheck.push('Tel: '+tel.value);
        return true;
    };
    tel.addEventListener('blur', validateTel);
    tel.addEventListener('focus', removeMessage);

//     -Adress:
    var adress = document.getElementById('adress');
    var adressErr = ['Adress Error! It has not been completed.'];
    var adressCheck = [localStorage.getItem('address')];
    if (localStorage.getItem('address') !== null) {
        adress.setAttribute('value', localStorage.getItem('address'));
        adressErr = [];
    };
    function validateAdress() {
        adressErr = [];
        adressCheck = [];
        var fitAbc = 0;
        var fitNum = 0;
        var lowerCase = adress.value.toLowerCase();
        if (adress.value.length === 0) {
            validateInput(adress,'Insert your adress, please');
            adressErr.push('Adress Error! It has not been completed.');
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
        if (adress.value.length < 5) {
            validateInput(adress,'Your adress must have at least 5 characters.');
            adressErr.push('Adress Error! It has to have at least 5 characters');
            return false;
        };
        if (fitAbc === 0) {
            validateInput(adress,'Your adress must have at least one letter.');
            adressErr.push('Adress Error! It does not contain letter.');
            return false;
        } ;
        if (fitNum === 0) {
            validateInput(adress,'Your adress must have at least one number.');
            adressErr.push('Adress Error! It does not contain numbers.');
            return false;
        };
        if (!adress.value.includes(' ')) {
            validateInput(adress,'Your adress must have at least one blank.');
            adressErr.push('Adress Error! It does not contain blanks.');
            return false;
        };
        adress.classList.add('green-border');
        adressCheck.push('Adress: '+adress.value);
        return true;
    };
    adress.addEventListener('blur', validateAdress);
    adress.addEventListener('focus', removeMessage);

//     -City:
    var location = document.getElementById('location');
    var locationErr = ['Location Error! It has not been completed.'];
    var locationCheck = [localStorage.getItem('city')];
    if (localStorage.getItem('city') !== null) {
        location.setAttribute('value', localStorage.getItem('city'));
        locationErr = [];
    };
    function validateLocation() {
        locationErr = [];
        locationCheck = [];
        var acceptedCharsNums = acceptedChars+acceptedNums;
        var lowerCase = location.value.toLowerCase();
        if (location.value.length === 0) {
            validateInput(location,'Insert your location, please');
            locationErr.push('Adress Error! It has not been completed.');
            return false;
        };
        if (location.value.length < 4) {
            validateInput(location,'Your location must have more than 3 characters.');
            locationErr.push('Adress Error! It has to have more than 3 characters.');
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
            validateInput(location,'You have used non-accepted characters (it accepts only letters and numbers).');
            locationErr.push('Adress Error! It contains non-accepted characters.');
            return false;
        };
        location.classList.add('green-border');
        locationCheck.push('Location: '+location.value);
        return true;
    };
    location.addEventListener('blur', validateLocation);
    location.addEventListener('focus', removeMessage);

//      -Postal Code:
    var cp = document.getElementById('cp');
    var cpErr = ['Postal Code Error! It has not been completed.'];
    var cpCheck = [localStorage.getItem('zip')];
    if (localStorage.getItem('zip') !== null) {
        cp.setAttribute('value', localStorage.getItem('zip'));
        cpErr = [];
    };
    function validateCP() {
        cpErr = [];
        cpCheck = [];
        if (cp.value.length === 0) {
            validateInput(cp,'Insert your Postal Code, please');
            cpErr.push('Postal Code Error! It has not been completed.');
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
            validateInput(cp,'You have used non-accepted characters (it accepts only numbers.');
            cpErr.push('Postal Code Error! It contains non-accepted characters.');
            return false;
        };
        if (cp.value.length !== 4 && cp.value.length !== 5) {
            validateInput(cp,'Your Postal Code has to have  4 or 5 characters');
            cpErr.push('Postal Code Error! It has to have 4 or 5 characters');
            return false;
        };
        cp.classList.add('green-border');
        cpCheck.push('CP: '+cp.value);
        return true;
    };
    cp.addEventListener('blur', validateCP);
    cp.addEventListener('focus', removeMessage);

//     -Email:
    var email = document.getElementById('email');
    var emailErr = ['Email Error! It has not been completed.'];
    var emailCheck = [localStorage.getItem('email')];
    if (localStorage.getItem('email') !== null) {
        email.setAttribute('value', localStorage.getItem('email'));
        emailErr = [];
    };
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
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
        emailCheck.push('Email: '+email.value);
        return true;
    };

    email.addEventListener('blur', validateEmail);
    email.addEventListener('focus', removeMessage);

//     -Password:
    var psw = document.getElementById('password');
    var pswErr = ['Password Error! It has not been completed.'];
    var pswCheck = [localStorage.getItem('password')];
    if (localStorage.getItem('password') !== null) {
        psw.setAttribute('value', localStorage.getItem('password'));
        pswErr = [];
    };
    function validatePassword() {
        pswErr = [];
        pswCheck = [];
        var fitAbc = 0;
        var fitNum = 0;
        var lowerCase = psw.value.toLowerCase();
        if (psw.value.length === 0) {
            validateInput(psw,'Insert your password, please');
            pswErr.push('Password Error! It has not been completed.');
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
            validateInput(psw,'Your password must have at least one letter.');
            pswErr.push('Password Error! It has to contain letters');
            return false;
        } 
        if (fitNum === 0) {
            validateInput(psw,'Your password must have at least one number.');
            pswErr.push('Password Error! It has to contain numbers');
            return false;
        };
        if (psw.value.length < 9) {
            validateInput(psw,'Your password must have more than 8 characters.');
            pswErr.push('Password Error! It has to contain at least 8 characters.');
            return false;
        };
        psw.classList.add('green-border');
        pswCheck.push('Password: '+psw.value);
        return true;
    };
    psw.addEventListener('blur', validatePassword);
    psw.addEventListener('focus', removeMessage);

//     -Confirm password:
    var pswConf = document.getElementById('password-confirm');
    var pswConfErr = ['Password Confirmation Error! It has not been completed.'];
    var pswConfCheck = [localStorage.getItem('password')];
    if (localStorage.getItem('password') !== null) {
        pswConf.setAttribute('value', localStorage.getItem('password'));
        pswConfErr = [];
    };
    function validatePswConf() {
        pswConfErr = [];
        pswConfCheck = [];
        if (psw.value !== pswConf.value) {
            validateInput(pswConf,'Your passwords do not match.');
            pswConfErr.push('Password Confirmation Error! Passwords do not match.');
            return false;
        };
        if (pswConf.value.length === 0) {
            validateInput(pswConf,'Repeat your password, please.');
            pswConfErr.push('Password Confirmation Error! It has not been completed.');
            return false;
        };
        pswConf.classList.add('green-border');
        pswConfCheck.push('Confirmed password: '+pswConf.value);
        return true;
    };
    pswConf.addEventListener('blur', validatePswConf);
    pswConf.addEventListener('focus', removeMessage);

//     -Sign Up Button:
    var signUpBtn = document.getElementById('sign-up-btn');
    function validateSignUp(e) {
        e.preventDefault();
        if (psw.value !== pswConf.value && pswConf.classList.contains('green-border')) {
            validateInput(pswConf,'Your passwords do not match.');
            pswConfErr.push('Password Confirmation Error! Passwords do not match.');
        }
        var validateMsjError = nameErr.concat(lastnameErr,dniErr,birthDateErr,telErr,adressErr,locationErr,cpErr,emailErr,pswErr,pswConfErr);
        if (validateMsjError.length !== 0) {
            alert(validateMsjError.join('\n'));
            return;
        };
        //        First validation passed:
        // var validateMsjCheck = nameCheck.concat(lastnameCheck,dniCheck,birthDateCheck,telCheck,adressCheck,locationCheck,cpCheck,emailCheck,pswCheck,pswConfCheck);
        // alert(validateMsjCheck.join('\n'));

        var year = birthDate.value.substring(0, 4);
        var month = birthDate.value.substring(5, 7);
        var day = birthDate.value.substring(8, 10);
        var dob = month+'/'+day+'/'+year;
        var path = 'name='+name.value+'&lastName='+lastname.value+'&dni='+dni.value+'&dob='+dob+'&phone='+tel.value+
            '&address='+adress.value+'&city='+location.value+'&zip='+cp.value+'&email='+email.value+'&password='+psw.value;
        fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?'+path)
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                if (response.success === false) {
                    throw response;
                }
                return response
            })
            .then(function(response){
                alert(response.msg)
                var paragraph = document.createElement('p');
                signUpBtn.parentElement.appendChild(paragraph);
                paragraph.classList.add('submited');
                paragraph.innerHTML = 'Submited';
                setTimeout(function formSubmited() {
                    signUpBtn.parentElement.removeChild(paragraph);
                },1000);
                return response
            })
            .then(function(response){
                localStorage.setItem('name',response.data.name);
                localStorage.setItem('lastName',response.data.lastName);
                localStorage.setItem('dni',response.data.dni);
                localStorage.setItem('dob',response.data.dob);
                localStorage.setItem('phone',response.data.phone);
                localStorage.setItem('address',response.data.address);
                localStorage.setItem('city',response.data.city);
                localStorage.setItem('zip',response.data.zip);
                localStorage.setItem('email',response.data.email);
                localStorage.setItem('password',response.data.password);
            })
            .catch(function(error){
                var errorMsg = [];
                for (var i = 0; i < error.errors.length; i++) {
                    errorMsg[i] = error.errors[i].msg; 
                };
                alert('Error:\n'+errorMsg.join('\n'));
            })
        
        var inputs = document.querySelectorAll('#form-sign-up input')
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('green-border');
        }
        return;
    };
    signUpBtn.addEventListener('click', validateSignUp);
});