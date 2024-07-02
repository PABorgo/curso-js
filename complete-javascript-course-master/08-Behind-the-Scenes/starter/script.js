'use strict';
/* function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output); // fuera del block scope firstName seguira siendo Pablo

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // crear una variable nueva con los mismos nombres que las variables del outer scope
      const firstName = 'Steven'; // firstName solo sera Steven dentro del block scope
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // reasignando las variables del outer scope
      output = 'NEW OUTPUT!';
    }
    //  console.log(str); no lo toma porque esta dentro del block scope
    console.log(millenial); // si puede tomarlo porque var no esta contenido dentro de block scope
    //  add(2, 3); //da error porque la funcion esta dentro del block scope
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Pablo';
calcAge(1995);
 */

// --------- PRACTICE OF HOISTING ------------

// hoisting con variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Pablo';
let job = 'teacher';
const year = 1991;

// hoisting con funciones

console.log(addDecl(2, 3)); // si puede ser llamada ya que addDecl es una declaracion
// console.log(addExpr(2, 3)); // no se puede acceder porque es una expresion
// console.log(addArrow(2, 3));
//
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
// si usaramos var para esta funcion, se puede usar en el global scope, pero antes de que sea declarada tendra el valor de undefined. por lo que el console.log dara error ya que el resultado seria undefined
var addArrow = (a, b) => a + b;

//  Ejemplo
// en este caso la consola mostrata que todos los productos fueron eliminados a pesar de que numProducts = 10, esto se debe a que numProducts es VAR y podemos acceder a ella antes de que sea declarada pero tendra el valor undefined, el cual es un falsy value.
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// -------------------SUPER NOTA------------------
/* Es mejor evitar usar el tipo VAR, y para que el codigo sea mas legible es mejor hacer las declaraciones de variables en la cima de cada scope. Ademas de eso es mejor primer declarar todas las funciones y usarlas unicamente luego de haberlas declarado, esto aplica a todo tipo de funciones, tanto declaraciones como expresiones*/

var x = 1;
let y = 2;
const z = 3;
