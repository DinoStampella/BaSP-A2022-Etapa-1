console.log('EXCERCISE 2: STRINGS');

//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('Excercise 2.a:');

var stringExerciseA = 'From lower case to upper case';

console.log(stringExerciseA.toUpperCase());

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('Excercise 2.b:');

var stringExerciseB = 'Full string to be cut at the beginning';
var stringBeginning = stringExerciseB.substring(0,5);

console.log(stringBeginning);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('Excercise 2.c:');

var stringExerciseC = 'Full string to be cut at the end';
var stringEnd = stringExerciseC.substring(stringExerciseC.length-3);

console.log(stringEnd);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('Excercise 2.d:');

var stringExerciseD = 'first letter of the string in UPPERCASE and the rest in LOWERCASE';
var firstLetter = stringExerciseD.substring(0,1);
var firstLetterUpperCase = firstLetter.toUpperCase();
var restOfTheString = stringExerciseD.substring(stringExerciseD.length-(stringExerciseD.length-1));
var restOfTheStringLowerCase = restOfTheString.toLowerCase();
var newStringExerciseD = firstLetterUpperCase + restOfTheStringLowerCase;

console.log(newStringExerciseD)

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('Excercise 2.e:');

var stringExerciseE = 'Find the first blank';
var firstBlank = stringExerciseE.indexOf(' ');

console.log(firstBlank);

//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('Excercise 2.f:');

var stringExerciseF = 'aBcDeFgHiJ kLmNoPqRsT';
var theBlankIndex = stringExerciseF.indexOf(' ');
var firstWord = stringExerciseF.substring(0, theBlankIndex);
var secondWord = stringExerciseF.substring(theBlankIndex+1, stringExerciseF.length);
var firstLetterFirstWord = firstWord.substring(0,1);
var firstLetterFirstWordUpperCase = firstLetterFirstWord.toUpperCase();
var restOfTheFirstWord = firstWord.substring(1,firstWord.length);
var restOfTheFirstWordLowerCase = restOfTheFirstWord.toLowerCase();
var firstLetterSecondWord = secondWord.substring(0,1);
var firstLetterSecondWordUpperCase = firstLetterSecondWord.toUpperCase();
var restOfTheSecondWord = secondWord.substring(1,secondWord.length);
var restOfTheSecondWordLowerCase = restOfTheSecondWord.toLowerCase();
var theBlank = stringExerciseF.substring(theBlankIndex,theBlankIndex+1);
var newStringExerciseF = firstLetterFirstWordUpperCase + restOfTheFirstWordLowerCase + theBlank + firstLetterSecondWordUpperCase + restOfTheSecondWordLowerCase;

console.log(newStringExerciseF);
