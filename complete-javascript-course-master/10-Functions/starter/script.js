'use strict';
/* Default parameters - Parametros por defecto
const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1, // forma de declarar un valor inicial en caso que no sea especificado al llamar la funcion
  price = 199 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);

  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000); // usamos undefined porque no podemos directamente saltear el segundo parametro
 */

// Argumentos como valores o referencias - VALUES VS REFERENCE ARGUMENTS

/* const flight = 'LH234';
const pablo = {
  name: 'Pablo Borgogno',
  passport: 247866123123,
};
// cuando pasamos por parametro un objeto, en realidad estamos pasando la referencia a memoria donde esta almacenado el objeto, por lo cual si dentro de la funcion modificamos el objeto, estamos modificando el objeto guardado en memoria y no una copia
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; // no es buena idea redefinir un valor primitivo pasado por parametro
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 247866123123) alert('Checked In!');
  else alert('Wrong passport!');
};

checkIn(flight, pablo);
console.log(flight);
console.log(pablo);

// pequeño ejemplo de que pasa cuando modificamos un objeto pasado por parametro, en este caso el passport del objeto fue cambiado y por lo tanto da como resultado wrong passport
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(pablo);
checkIn(flight, pablo);
 */
/* 
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higer-order function
// son funciones que reciben por parametros a otras funciones o que tienen como resultado otras funciones.
// Los callbacks de funciones permiten tener un mayor nivel de abstraccion, por lo tanto hacer el codigo mucho mas simple. Algunas funciones como transformer no les interesa el proceso de como se transforma una palabra, todo lo que quiiere es transformarla, gracias a los callbacks podemos especificar el proceso en otra funcion especifica y luego llamarla en transformer, haciendo asi el codigo mas sencillo y facil de entender
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

// JS usa callbacks todo el tiempo / all the time
document.body.addEventListener('click', high5);

['Pablo', 'Matias', 'Hector'].forEach(high5);
 */
// Funciones que devuelven funciones
/* 
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Pablo');
greeterHey('Matias');

// greet('Hello') retorna una funcion, por lo que podemos llamar inmediatamente ('Pablo') como parametro
greet('Hello')('Pablo');

// transcrito a arrow function

const greet2 = greeting => name => console.log(`${greeting} ${name}`);
console.log('nuevo arrow func');
greet2('Sup')('Hector');
 */

// Metodo Call y Apply
/* 
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Pablo Borgogno');
lufthansa.book(694, 'Matias Javier');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
// para crear una copia de la funcion sin tener que sacarla del primer objeto, asi podremos reutilizar el codigo sin tener que modificarlo
const book = lufthansa.book;

// NO FUNCIONA
// book(23, 'Sarah Williams');

//  CALL METHOD
// en este caso usamos call para llamar a la funcion book indicandole en el primer parametro a que objeto queremos que apunte la keyword 'THIS'
book.call(eurowings, 23, 'Sara Williams');
console.log(eurowings);

book.call(lufthansa, 238, 'Hector Alfredo');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 546, 'Mary Cooper');
console.log(swiss);

// APPLY METHOD - funciona de la misma forma que el call methos pero no recibe un alista de argumentos despues del this keyword, sino que recibe un array con los argumentos y luego los pasa a la funcion

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
// este metodo ya no se usa mas en javascript moderno porque podemos hacer lo mismo con el metodo call
book.call(swiss, ...flightData); // con el spread operator podemos conseguir el mismo resultado que con apply

// BIND METHOD - tambien sirve para apuntar THIS keyword a un objeto como apply y call, con la diferencia de que bind no va a llamar a la funcion 'book' en este caso, sino que  crea una nueva funcion con la palabra THIS apuntando al objeto pasado por parametros

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
// de esta forma solo creamos una variable que contenga la funcion que necesitamos de cada objeto y podemos simplificar el codigo
bookEW(23, 'Steven Willie');

// tambien podemos especificar mas de un solo argumento en la funcion bind y darle argumentos especificos para que llame a la funcion, ej:
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Marta Brusal');
bookEW23('Fede Canare');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // forma de escribir lo mismo que abajo pero con bind parcial, la this keyword esta apuntando a null ya que no nos interesa que apunte hacia ningun lado
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

// escribir lo mismo pero con una funcion que de como resultado otra funcion

const taxPrueba = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = taxPrueba(0.23);
console.log(addVAT(100));
console.log(addVAT(23));
 */
/*
// Challenge #1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const input = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // if (input >= 0 && input <= 3) {
    //   this.answers[input]++;
    // }
    // hacemos uso de short circuit para ejecutar answers[input]++ en caso de que las dos comparaciones anteriores sean correctas
    typeof input === 'number' &&
      input < this.answers.length &&
      this.answers[input]++;

    this.displayResults('string');
    this.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are: ${this.answers.join(', ')}`);
    }
  },
};
/* 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number) 

// poll.registerNewAnswer();
// console.log(poll.answers);

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 1] }); // esto funciona porque con call hacemos que this apunte al nuevo objeto con la propiedad answers
*/

/* //  ------------------ Immediatly invoked function expressions

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE esta es la forma de llamar inmediatamente a una funcion sin tener que asignarla a una variable, poniendola entre () y luego llamandola con () se puede ejecutar inmediatamente,
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
// esto se usa para poder declarar variables dentro del scope y que queden como privadas de ese scope que fueron creadas originalmente, de ese modo no sera llamadas accidentalmente en el global scope, esto no es especifico de javascript sino que es un metodo que descubrieron varios desarrolladores y se hizo famoso.

console.log(isPrivate);
(() => console.log('THIS WILL NEVER RUN AGAIN'))();
{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
 */

// closures
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body'),
    addEventListener('click', function () {
      header.style.color = 'blue';
    });
})();
