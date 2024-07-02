'use strict';

/* DEFINICION DE DOM (Document Object Model)
es una estructura de representacion de HTML documents, permite a javascript acceder a elementos y estilos de HTML para manipularlos.
el DOM es generado por el browser en el momento en el que el archivo html es ejecutado.

DOCUMENT es un objeto especial que sirve de entrada al DOM.

API = Aplication Programming Interface
DOM no es parte de javascript, DOM es en realidad una parte de las WEB APIs -> las APIs son como librerias (tambien escritas en javascript) que nuestro navegador implementa al que podemos acceder con nuestro codigo Javascript.

Todo esto pasa detras de escenas automaticamente.
*/
// la siguiente linea de codigo muestra por consola el contenido de document.querySelector('.message').textContent
/* console.log(document.querySelector('.message').textContent);

// ademas de mostrar el contenido del documento tambien podemos setear uno nosotros mismos

document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// estas lineas de codigo las usamos para manipular los valores del input
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Hay formas de hacer que nuestro codigo reaccione a algo que pase en el DOM, para eso usamos un event listener (mouse click, key press, etc), para eso se espera que un evento pase y el codigo reacciona a ese evento.
// hay varias formas de hacer que el codigo escuche un evento, pero addEventListener es la mas usada, primero se pasa el tipo de evento, en este caso un simple click y luego de eso debemos decirle como debe reaccionar a este evento a travez de una funcion (event handler function) como segundo argumento

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //guess va a ser convertido en booleano, en el caso de que no escriban un numero en el input y hagan click, en consola se vera que retorna un 0, lo que indica que es un falsy value, !guess hara que en caso de guess ser falso el ! lo hara verdadero y se correra la linea de codigo if
  // cuando no hay input

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // cuando el jugador gana
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // cuando el numero es diferente
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈Too high!' : '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // cuando el numero es demasiado alto
  /*  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // cuando el numero es demasiado bajo
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

/* challenge
Implement a game restart functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
 */

document.querySelector('.again').addEventListener('click', function () {
  // reseterando el background style
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').textContent = score; // resetea el score

  secretNumber = Math.trunc(Math.random() * 20) + 1; // resetea el numero secreto

  document.querySelector('.message').textContent = 'Start guessing...'; // resetea el message

  document.querySelector('.number').textContent = '?'; // resetea el numero

  document.querySelector('.guess').value = ''; //recordar que el value siempre es un string, por lo que lo reseteamos con un string vacio
});

/* REFACTORING---------------- significa basicamente reestructurar el codigo pero sin cambiar la forma en la que trabaja, al principio solo nos preocupamos de que el codigo funcione y cumpla con su trabajo, pero luego debemos optimizar el codigo y evitar el codigo duplicado, para esto se usa el refactoring.
1 - Identificar los codigos duplicados o casi duplicados dentro del proyecto




*/
