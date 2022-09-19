console.log('EXERCISE 6: FUNTIONS');

//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('Exercise 6.a:');

function suma1(a, b) {
    return (a + b);
};

var sumar = suma1(1, 1); // return 2

console.log(sumar);

//A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('Exercise 6.b:');

function validateNaN(num) {

    return typeof num === 'number'; 

    }

function suma2(a, b) {

    if (!validateNaN(a)) {
        alert('Error! At least one of the parameters is NaN');
        return NaN;
    };
    if (!validateNaN(b)) {
        alert('Error! At least one of the parameters is NaN');
        return NaN;
    };
    return (a + b);
    
};

console.log(suma2(1, 1)); // return 2
console.log(suma2(1, '1')); // Alert and return NaN 
console.log(suma2(1, 'uno')); // Alert and return NaN 

//Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('Exercise 6.c:');

function validateIntenger(num) {
    
    return Number.isInteger(num);

};

console.log(validateIntenger(1)); // return true
console.log(validateIntenger(1.5)); // return false

//A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).

console.log('Exercise 6.d:');
 
function suma3(a,b) {

    if (!validateNaN(a) || !validateNaN(b)) {
        alert('Error! At least one of the parameters is NaN');
        return NaN;
    };
    if (!validateIntenger(a)) {
        alert('Error! At least one number is not an integer.');
        return Math.round(a);
    };
    if (!validateIntenger(b)) {
        alert('Error! At least one number is not an integer.');
        return Math.round(b);
    };
    return (a + b);

};

console.log(suma3(1, 2)); // return 3
console.log(suma3(0.6, 2)); // Alert and return 1 (Math.round of the first parameter) 
console.log(suma3(1, '2')); // Alert and return NaN 

// //Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('Exercise 6.e:');

function fullValidate(num) {
    
    if (!validateNaN(num) || !validateIntenger(num)) {
        return false;
    };
    return true;
}

function suma4(a, b) {

    if (!fullValidate(a) || !fullValidate(b)) {
        return false;
    };
    return (a + b);
}

console.log(suma4(1, 2)); // return 3
console.log(suma4(1, 2.5)); // Alert and return false 
console.log(suma4(1, '2')); // Alert and return false 