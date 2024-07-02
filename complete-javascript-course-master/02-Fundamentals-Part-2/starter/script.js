"use strict";
//activamos modo estricto para escribir codigo de forma segura y correctamente, siempre se usa al comienzo del script. Puede ayudar a no tener errores en el codigo
/*
let hasDriversLicense = false;
const passTest = true;

// si le faltara una s a hasdriverLicense, si no usaramos strict mode no reconoceria el error en la consola, pero con el strict mode la consola nos avisa cual es el error. Es un bug solucionable usando modo estricto
if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 543;
// en estos 2 casos daria error porque esas dos variables estan reservadas por el lenguaje
*/

// -------------------------------Funciones-----------------------------------

// es una piesa de codigo que podemos usar muchas veces en el codigo
//  la funcion de abajo es logger para simplemente log algo a la consola
/*
function logger(){
   console.log('My name is Pablo');
}

logger();
logger();
logger();

function procesadorFruta(manzanas, naranjas){
   const jugo = `Jugo con ${manzanas} manzanas y ${naranjas} naranjas.`;
   return jugo;
}
// dos formas de mostrar el return de la funcion
const jugoManzana = procesadorFruta(5,0);
console.log(jugoManzana);
console.log(procesadorFruta(5, 0));

const jugoManzanaNaranja = procesadorFruta(2, 4);
console.log(jugoManzanaNaranja);
*/

/*
// Function declaration
function calcAge1(birthYear){
   return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression

const calcAge2 = function (birthYear) {
   return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// La diferencia entre ambas es que en funtion declaration se puede llamar a
// la funcion incluso antes de que haya sido definida.

*/
/*

// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
   const age = 2037 - birthYear;
   const retirement = 65 - age;
   //return retirement;
   return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Pablo'));
console.log(yearsUntilRetirement(1980, 'Bob'));

*/

// ---------------Functions calling other functions---------------
/*
function cutFruitPieces(fruit){
   return fruit * 4;
}

function fruitProcessor(apples, oranges){
   const applePieces = cutFruitPieces(apples);
   const orangePieces = cutFruitPieces(oranges);

   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
   return juice;
}

console.log(fruitProcessor(2, 3));
*/

// -------------- CODING CHALLENGE N1-----------
/*
const calcAverage = (a, b, c) => (a+b+c)/3;

let scoreKoalas = calcAverage(65,54,49);
let scoreDolphins = calcAverage(44,23,71);
console.log(scoreKoalas, scoreDolphins);

const checkWinner = function(avKoalas, avDolphins){
   if(avKoalas >= avDolphins * 2){
      console.log(`Koalas wins (${avKoalas} vs ${avDolphins})`);
   } else if(avDolphins >= avKoalas){
      console.log(`Dolphins wins (${avDolphins} vs ${avKoalas})`);
      } else {
         console.log(`No team wins...`)
      }
   
}

checkWinner(scoreKoalas, scoreDolphins);

//test 2

scoreKoalas = calcAverage(23,34,27);
scoreDolphins = calcAverage(85,54,41);
console.log(scoreKoalas, scoreDolphins);


checkWinner(scoreKoalas, scoreDolphins);
*/

// ---------------- ARRAYS ----------------

/* const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const yea = new Array(1991, 1984, 2008, 2022);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Pablo';
const pablo = [firstName, 'Borgogno', 2022 - 1995, 'student', friends];
console.log(pablo);
console.log(friends.length);

// arrays exercise

const calcAge = function (birthYear) {
   return 2022 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

 */

/* // Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

//  indexOf retorna el indice de el valor pasado por parametro dentro del array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
} */

// ---------------- Coding challenge #2 Arrays --------------
/* 
function calcTip(bill){
   const tip = (bill => 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
   return tip;
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills);
console.log(tips);

const total = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);
console.log(total); */

//  ------------------- OBJETS -----------------------
/* const pablo = {
   firstName: 'Pablo',
   lastName: 'Borgogno',
   age: 2022 - 1995,
   job: 'Carnicero',
   friends: ['Brian', 'Agustin', 'Kevin']
};
console.log(pablo);

console.log(pablo.lastName);
console.log(pablo['lastName']);

// una interesante forma de hacer uso de los parentesis y su capacidad de interpretar expresiones
const nameKey = 'Name';
console.log(pablo['first' + nameKey]);
console.log(pablo['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Pablo? Choose between firstName, lastName, age, job, and friends');

if(pablo[interestedIn]){
   console.log(pablo[interestedIn]);
}else {
   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

pablo.location = 'Argentina';
pablo['twitter'] = '@NotengoPelotudo';
console.log(pablo);

console.log(`${pablo.firstName} has ${pablo.friends.length} friends, and his best friend is called ${pablo.friends[0]}`); */

// --------------- FORMA DE DECLARAR FUNCIONES DENTRO DE LOS OBJETOS ----------------(METHOD)
/* const pablo = {
   firstName: 'Pablo',
   lastName: 'Borgogno',
   birthYear: 1995,
   job: 'Carnicero',
   friends: ['Brian', 'Agustin', 'Kevin'],
   hasDriversLicense: true,

   // calcAge: function(birthYear){
   //    return 2022 - birthYear;
   // }


   // calcAge: function(){
   //    console.log(this);
   //    return 2022 - this.birthYear;
   // }

   calcAge: function() {
      this.age = 2022 - this.birthYear;
      return this.age;
   },
//  Challenge
   getSummary: function() {
      return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers License.`;
   }

};
// console.log(pablo.calcAge());
// console.log(pablo.age);

console.log(pablo.getSummary());

 */
// ----------- CODING CHALLENGE #3 ----------------
/* 
const mark = {
   fullName: 'Mark Miller',
   mass: 78,
   height: 1.69,

   calcBMI: function(){
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
   }
};

const john = {
   fullName: 'John Smith',
   mass: 92,
   height: 1.95,

   calcBMI: function(){
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
   }
};

console.log(mark.calcBMI(), john.calcBMI());

if(mark.bmi > john.bmi){
   console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
} else{
   console.log(`${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}
 */

// ---------- FOR LOOP ----------
/* 
for(let rep = 1; rep <= 10; rep++){
   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️.`);
}
 */

/* 
const pablo = [
   'Pablo', 
   'Borgogno', 
   2022 - 1995, 
   'student', 
   ['Brian', 'Kevin', 'Agustin', 'Juanse'],
   true
];

const types = [];

for(let i = 0; pablo.length > i ; i++){
   // reading from pablo array
   console.log(pablo[i], typeof pablo[i]);
// filling types array
   // types[i] = typeof pablo[i];
   types.push(typeof pablo[i]); // cleaner code
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length ; i++){
   ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
// fuerza la detencion de la iteraccion actual y continua con la siguiente
console.log('ONLY STRINGS');
for(let i = 0; i < pablo.length; i++){
   if(typeof pablo[i] !== 'string') continue;

   console.log(pablo[i], typeof pablo[i]);
}
// -----
console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < pablo.length; i++){
   if(typeof pablo[i] === 'number') break;

   console.log(pablo[i], typeof pablo[i]);
}
 */

//  LOOPING BACKWARDS AND LOOPS IN LOOPS
/* 
const pablo = [
   'Pablo', 
   'Borgogno', 
   2022 - 1995, 
   'student', 
   ['Brian', 'Kevin', 'Agustin', 'Juanse'],
   true
];

for(let i = pablo.length - 1; i >= 0;i--){
   console.log(i, pablo[i]);
}

for(let exercise = 1; exercise < 4; exercise++){
   console.log(`------- Starting exercise ${exercise}`);

   for(let rep = 1; rep <6; rep++){
      console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
   }
}

 */

//  ---------- WHILE LOOP -----------

/* let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
 */
// ------------ CODING CHALLENGE #4 -------------

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(totals));
