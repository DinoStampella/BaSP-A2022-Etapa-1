window.addEventListener('load', function() {
// REUTILIZABLES 
    function validateInputError(input, txt) {
        var paragraph = document.createElement('p');
        input.parentElement.insertBefore(paragraph,input.nextSibling);
        paragraph.classList.add('wrong');
        paragraph.innerHTML = txt;
        input.classList.remove('green-border');
    };
    function removeMessage(e) {
        var clicked = e.target;
        if (clicked.nextElementSibling.classList.contains('wrong')) {
            clicked.parentElement.removeChild(clicked.nextElementSibling);
        };
    };

//     -Nombre:
    var name = document.getElementById('form-name');
// Onblur: Validar si solo tiene letras y mas de tres caracetes, sino mostrar mensaje.
    name.addEventListener('blur',validateName);
    var nameErr = ['Name Error! It has not been completed.'];
    var nameCheck = [];
    var abc = 'abcdefghijklmnñopqrstuvwxyz ';
    function validateName() {
        nameErr = [];
        nameCheck = [];
        if (name.value.length === 0) {
            validateInputError(name,'');
            nameErr = ['Name Error! It has not been completed.'];
            return;
        };
        if (name.value.length < 4 && name.value.length > 0) {
            validateInputError(name,'It has to have more than 3 characters.');
            nameErr = ['Name Error! It has to have more than 3 characters'];
            return;
        };
        var lowerCase = name.value.toLowerCase();
        var charactersAmount = 0;
        for (let i = 0; i < lowerCase.length; i++) {
            for (let j = 0; j < abc.length; j++) {
                if (lowerCase.charAt(i) === abc.charAt(j)) {
                    charactersAmount++;
                };
            };
        };
        if (name.value.length !== charactersAmount) {
            validateInputError(name,'You have used non-accepted characters');
            nameErr = ['Name Error! It contains non-accepted characters'];
            return;
        };
        name.classList.add('green-border');
        nameCheck.push('Name: '+name.value);
        return;
    };
// Onfocus: Desaparecer mensaje
    name.addEventListener('focus', removeMessage);

//     -Email:
    var email = document.getElementById('form-email');
// Onblur: validacion regex, sino mostrar mensaje.
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    email.addEventListener('blur',validateEmail);
    var emailErr = ['Email Error! It has not been completed.'];
    var emailCheck = [];
    function validateEmail() {
        emailErr = [];
        emailCheck = [];
        if (email.value.length === 0) {
            validateInputError(email,'');
            emailErr = ['Email Error! It has not been completed.'];
            return;
        };
        if (!emailExpression.test(email.value)) {
            validateInputError(email,'It does not accomplish the requirements.');
            emailErr = ['Email Error! It does not accomplish the requirements.'];
            return;
        };
        email.classList.add('green-border');
        emailCheck.push('Email: '+email.value);
        return;
    };
// Onfocus: desaparecer mensaje.
    email.addEventListener('focus', removeMessage);
//     -Category
    var contactArea = document.getElementById('contact-area');
// Validar si se ha seleccionado algunas de las otras 3 opciones.
    contactArea.addEventListener('blur',validateContactArea);
    var contactAreaErr = ['Contact area Error! No option has been chosen.'];
    var contactAreaCheck = [];
    function validateContactArea() {
        contactAreaErr = [];
        contactAreaCheck = [];
        if (contactArea.value === 'Non-select') {
            validateInputError(contactArea,'');
            contactAreaErr = ['Contact area Error! No option has been chosen.'];
            return;
        };
        contactArea.classList.add('green-border');
        contactAreaCheck.push('Contact area: '+contactArea.value);
        return;
        };

//     -Mensaje
    var textarea = document.getElementById('form-txt');
// Onblur: Validar si que sea texto
    textarea.addEventListener('blur', validateTextarea);
    var textareaErr = ['Message Error! It has not been completed.'];
    var textareaCheck = [];
    function validateTextarea() {
        textareaErr = [];
        textareaCheck = [];
        if (textarea.value.length === 0) {
            validateInputError(textarea,'');
            textareaErr = ['Message Error! It has not been completed.'];
            return;
        };
        if (textarea.value.length < 3) {
            validateInputError(textarea,'It has to have at least 3 characters.');
            textareaErr = ['Message Error! It has to have at least 3 characters.'];
            return;
        };
        textarea.classList.add('green-border');
        textareaCheck.push('Message: '+textarea.value);
        return;
    };
// Onfocus: desaparecer mensaje.
    textarea.addEventListener('focus', removeMessage);

//     -Boton "Send"
    var sendBtn = document.querySelector('.form-btn-submit');
// Onclick: validar formulario y alertar la info.
    var inputs = [name,email,contactArea,textarea];
    sendBtn.addEventListener('click', validateForm);
    function validateForm(e) {
        e.preventDefault();
        var validateMsjError = nameErr.concat(emailErr,contactAreaErr,textareaErr);
        if (validateMsjError.length !== 0) {
            alert(validateMsjError.join('\n'));
            return;
        };
        var validateMsjCheck = nameCheck.concat(emailCheck,contactAreaCheck,textareaCheck);
        alert(validateMsjCheck.join('\n'));
        document.getElementById('form-contact').reset();
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('green-border');
        }
        var paragraph = document.createElement('p');
        sendBtn.parentElement.appendChild(paragraph);
        paragraph.classList.add('submited');
        paragraph.innerHTML = 'Submited';
        setTimeout(function formSubmited() {
            sendBtn.parentElement.removeChild(paragraph);
        },2000)
        return;
    };

//     -Boton "Cancel"
    var cancelBtn = document.querySelector('.form-btn-cancel');
// Onclick: reiniciar formulario, quitarle el color verde a los bordes
    cancelBtn.addEventListener('click', removeMessages);
        function removeMessages() {
            for (let i = 0; i < inputs.length; i++) {
                var clicked = inputs[i];
                if (clicked.nextElementSibling.classList.contains('wrong')) {
                    clicked.parentElement.removeChild(clicked.nextElementSibling);
                };
                inputs[i].classList.remove('green-border');
            };
        };
});

