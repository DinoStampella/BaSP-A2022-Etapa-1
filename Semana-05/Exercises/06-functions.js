console.log('EXERCISE 6: FUNTIONS');

//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('Exercise 6.a:');

function suma(a,b) {
    return (a + b);
};

var sumar = suma(1,1);

console.log(sumar);

//A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('Exercise 6.b:');

function suma(a,b) {
    if (isNaN(a) || isNaN(b)) {
        alert('Al menos uno de los parametros tiene un error');
        return NaN
    }

    return (a + b);
    
};

console.log(suma(1,'uno'));

//Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('Exercise 6.c:');

function validateIntenger(num) {
    
    return Number.isInteger(num);

}

console.log(validateIntenger(1))

//A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).

console.log('Exercise 6.d:');

function suma(a,b,validate) {
    if (isNaN(a) || isNaN(b)) {
        alert('Al menos uno de los parametros tiene un error');
        return NaN
    }
    if (!validate(a)) {
        alert('Error! At least one number is not an integer.');
        return Math.round(a);
    } 
    if (!validate(b)) {
        alert('Error! At least one number is not an integer.');
        return Math.round(b);
    }  
    return (a + b);
};

console.log(suma(2,2,validateIntenger))

//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('Exercise 6.e:');
