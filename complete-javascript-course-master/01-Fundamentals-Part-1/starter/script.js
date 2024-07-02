/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Pablo");
console.log(26);

//here we have some ways to name variables

let firstName = "Pablo";
//
console.log(firstName);
console.log(firstName);
console.log(firstName);

let second_name = "Ariel";
let $surname = "Borgogno";

let myFirstJob = 'coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/
// Data Types
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Pablo');
//tipeo dinamico, cambiamos el tipo de la variable sin teneer que especificar nada

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

//ejemplo de variable undefined
let year;
console.log(year);
console.log(typeof year);
//y luego podemos ver que esto
year = 1995;
console.log(typeof year); // ahora la variable es tipo number

console.log(typeof null);
*/
// Let, const, var
/*
let age = 30;
age = 31;

const birthYear = 1995;

var job = 'programador';
job = 'teacher';

lastName = 'Borgogno';
console.log(lastName);
*/
/*
const now = 2021; // usamos esta variable constante porque si usamos 2021 en las otras declaraciones y luego tenemos que cambiarlas tendriamos que hacerlo una por una, de esta forma solo lo cambiamos una vez y afectara a todas las otras variables que la utilizan.
const agePablo = now - 1995;
const ageLaura = now - 1997;
console.log(agePablo, ageLaura);

console.log(agePablo * 2, agePablo / 10, 2**3);

const firstName = 'Pablo';
const lastName = 'Borgogno';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--; // x = 99
console.log(x);

// OPERADORES DE COMPARACION
console.log(agePablo > ageLaura);
console.log(agePablo >= 18);

const isFullAge = ageLaura >= 18;

console.log(now - 1991 > now - 2018);
*/

// const now = 2037;
// const agePablo = now - 1995;
// const ageLaura = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25-10-5;
// console.log(x, y);

// const averageAge = (agePablo + ageLaura) / 2;
// console.log(agePablo, ageLaura, averageAge);

/*
const firstName = 'Pablo';
const job = 'student';
const birthYear = 1995;
const year = 2020;

const Pablo = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";  

console.log(Pablo);

//with templates, `` para declarar el string y ${} para indicar las variables 
const pabloNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(pabloNew);
console.log(`string with
multiple
lines`); 
*/

// ------------------------------------------------------------------

// tipos de conversion de datos, type coercion and type conversion
// type conversion es cuando manualmente cambiamos el tipo de dato que estamos usando
// type coercion es cuando javascript cambia automaticamente el tipo de dato

/* Type Conversion
const inputYear = 1991;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("pablo"));
console.log(typeof NaN);

console.log(String(23), 23);

// TYPE COERCION

console.log('I am ' + 23 + ' years old');

*/
// estos valores no son falsos inicialmente, pero seran falsos una vez convertidos a booleanos
// falsy values: 0, '', undefined, null, NaN

// todos los demas valores son truthy values
/*
console.log(Boolean(0(undefin));
console.log(Booleaned));
console.log(Boolean('Pablo'));
console.log(Boolean({}));

const money = 0;

if(money){
   console.log("no lo gastes todo");
} else {
   console.log("conseguite un laburo");
}

let height;
if(height){
   console.log("height esta definida");
} else {
   console.log("height no esta definida");
}
*/

// VALORES DE COMPARACION -------------------------------------------------

/*
valores de comparacion: == y ===

== es comparacion equal que permite type coercion, osea que un string '23' == 23, javascript lo interpretara como verdadero.

=== es una comparacion estricta, osea que no permite type coercion, '23' === 23, javascript lo interpretara como falso.

tambien se puede usar la diferencia: !== y != ; el funcionamiento es el mismo que los equals
*/

//  LOGICA BOOLEANA AND; OR; NOT ----------------------------------------

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision); // AND
// console.log(hasDriversLicense || hasGoodVision); // OR
// console.log(!hasDriversLicense); // NOT

// if(hasDriversLicense && hasGoodVision){
//    console.log('El puede conducir');
// }else {
//    console.log('alguien mas deberia conducir');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//    console.log('El puede conducir');
// }else {
//    console.log('alguien mas deberia conducir');
// }

//  COMPARADOR SWITCH ---------------------------

// Usamos este comparador cuando queremos comparar un valor con diferentes opciones
/*
const day = 'monday';

switch(day){
   case 'monday': // day === 'monday'
      console.log('Plan course structure');
      console.log('Go to coding meetup');
      break;
   case 'tuesday':
      console.log('Prepare theory videos');
      break;
   case 'wednesday': //escribiendo 2 case seguidos se puede hacer que el codigo que ejecuta sea el mismo para ambos cases
   case 'thursday':
      console.log('write code examples');
      break;
   case 'friday':
      console.log('redord videos');
      break;
   case 'saturday':
   case 'sunday':
      console.log('enojoy the weekend');
      break;
   default:
         console.log('Not a valid day!');
}

//lo mismo que el codigo anterior pero con if y else

if(day === 'monday'){
   console.log('Plan course structure');
   console.log('Go to coding meetup');
}else if(day === 'tuesday'){
   console.log('Prepare theory videos');
}else if(day === 'wednesday' || day === 'thursday'){
   console.log('write code examples');
}else if(day === 'friday'){
   console.log('redord videos');
}else if(day === 'saturday' || day === 'sunday'){
   console.log('Enjoy the weekend');
}else {
   console.log('Not a valid day!');
}
*/

/*
   DIFERENCIAS ENTRE STATEMENT AND EXPRESIONS

3+4 es una expresion porque produce un valor 

el statement es un grupo de acciones que se ejecutan pero no producen un valor por si mismos, deben ser ejecutados para producir un valor

*/

/* ----------------- OPERADOR CONDICIONAL--------------------*/

// permite escribir algo similar a if else, pero en una sola linea
// la primera parte cumple con la funcion de if y la segunda parte del else
// este operador tambien es llamado ternary operator ---- ? ----
const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
