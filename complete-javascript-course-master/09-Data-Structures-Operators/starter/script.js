'use strict';

// Data needed for a later exercise
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//objeto usado para luego llamar dentro de restaurante como propiedad
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  //objeto restaurante que tiene dentro varias funciones y elementos array
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Enhance of properties after ea6
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // podemos pasar un unico argumento como objeto para hacer el destructuring directamente como una funcion dentro de un objeto que recibe otro objeto como parametros
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '22:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // ENHANCE OF FUNCTIONS AFTER EA6, there is no need to write orderPasta: function(){} anymore, we can just get rid of the function keyword and :
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(36);

  console.log(output);
}

/* // Codding challenge 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n'); // definimos el final de linea y creamos el array con las diferentes palabras como valores
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    // hacemos destructuring para saber cual es el index y los valores del array rows
    const [first, second] = row.toLowerCase().trim().split('_'); // primero convertimos todo a minusculas, eliminamos espacios y separamos palabras _
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase() //para reemplazar la primera letra de la segunda palabra con mayusculas
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`); //se usa pad end luego de las palabras para que los simbolos de check empiecen en el mismo punto de partida.
  }
}); */
/* 
// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Pablo Borgogno'.split(' '));

const [firstName, lastName] = 'Pablo Borgogno'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // dos formas diferentes de hacer lo mismo
    // namesUpper.push(n[0].toUpperCase + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('pablo borgogno');

//  Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+')); //agrega caracteres al principio del string, y pad end agrega caracteres al final del string
console.log('Pablo'.padStart(20, '+').padEnd(30, '+'));

// una buena forma de practicar padding con las tarjetas de credito
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12319476));
console.log(maskCreditCard('123489765123'));

//  Repeat, nos permite repetir el mismo string varias veces
const message2 = 'Bad weather... All Departures Delaed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12); */
/*
///////////////////////////////////////
// Working With Strings - Part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/
/*
///////////////////////////////////////
// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));


console.log(airline.slice(4));   devuelve el valor desde el indice 4 en adelante
console.log(airline.slice(4, 7)); devuelve el valor desde indice 4 a 7 = el resultado son 7-4 = 3 valores

console.log(airline.slice(0, airline.indexOf(' '))); devuelve el valor desde indice 0 hasta el primer espacio vacio
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); devuelve todos los valores desde el ultimo espacio vacio hasta que termina el string

console.log(airline.slice(-2)); devuelve el string entero quitandole los ultimos 2 valores
console.log(airline.slice(1, -1)); devuelve el string entero quitando el primer y ultimo valor

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

cuando llamamos un metodo para string, javascript convierte el string en un objeto (todo detras de escena) para modificarlo y devuelve un string primitivo como resultado, el objeto luego es convertido a primitivo nuevamente
console.log(new String('pablo'));
console.log(typeof new String('pablo'));

console.log(typeof new String('pablo').slice(1));
*/

/* // /////////////////////// MAPS ITERATIONS
const question = new Map([
  ['question', 'What is the best programming lenguage in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'correct!'],
  [false, 'try again!'],
]);
console.log(question);

// convertir objeto a mapa
console.log(Object.entries(openingHours));

const hourMaps = new Map(Object.entries(openingHours));
console.log(hourMaps);

// quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//  CONVERT MAP TO ARRAY
console.log([...question]);
// console.log(question.entries());
console.log(...question.values());
console.log(...question.keys());
/*  
/////////////////// MAPS
// mapas son una estructura de datos que podemos usar para mapear values en keys

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// una forma de usar los metodos de maps
const time = 21;
console.log(rest.get(time > rest.get('open') ?? time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear(); para borrar todos los elementos del map

// tambien podemos usar objetos y arrays como MAP keys
const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
 */
/* 
//////////////////// SETS
// El uso mas normal de los sets es para borrar los valores repetidos de los arrays
const ordersSet = new Set([
  'Pasta',
  'Pizaa',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Pablo'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Rissoto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
 */
/* 
/////////////////////////////Property names//////////////////////
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
} */
/* 
// /////////// OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open); //en el caso de que no exista devuelve undefined y no produce un error
console.log(restaurant.openingHours?.mon?.open);

// EJEMPLOS
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // we use ?? para que no se produzca un error, cuando es undefined entonces procesa closed y el texto que sale en el navegador no dice (string) undefined
  console.log(`On ${day}, we open at ${open}`);
}

// METHOD
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist');

// ARRAYS
const users = [{ name: 'Pablo', email: 'hola@pablo.com' }];
console.log(users[0]?.name ?? 'User array empty');
 */
// -------------------------------------------- Coding Challenge number 1 ---------------------------------

/* // //////////////////////////////////// FOR-OF LOOP ///////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
} 
console.log([...menu.entries()]);
*/
/* 
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// ///////////////////// challenge numero 2 ////////////////////
// punto numero 1
for (const [i, name] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${name}`);
}

// punto numero 2
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// punto numero 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} is ${odd}`);
} */
/////////////////////////////////////Coding challenge numero 1////////////////////////////

// punto numero 4
//const scorers = {};
/*

// punto numero 1
const [players1, players2] = game.players;

console.log(players1);
console.log(players2);

// punto numero 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// punto numero 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// punto numero 4

const players1Final = [...players1, 'Thiago', 'Countinho', 'Perisic'];
console.log(players1Final);

// punto numero 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// punto numero 6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
printGoals(...game.scored);

// punto numero 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
 */
/* 
const rest1 = {
  name: 'Capri',
  numGuest: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rocket Team',
};


//----------------------------------------
// OR assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// Nullish assignment operator (solo asigna el valor de la derecha si el valor de la izquierda es nullish)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// AND assignment operator
// rest1.owner = rest1.numGuest && '<ANONYMOUS>';
// rest2.owner = rest2.numGuest && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>'; //en este caso es correcto porque de la forma anterior devolvia undefined y en este caso directamente no hace nada, lo cual es lo que queremos.
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2); */
/* 
////////////NULLISH COALESCING OPERATOR
// restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
 */
/* 
/////////////////////////////// OR AND /////////////////////////////////////
// Use ANY data type, return ANY data type, short-circuiting
console.log('----- OR -----');
// hace short-circuiting con el primer valor truthy que lee, en este caso las respuestas de los log serian 3, 'pablo', true, null
console.log(3 || 'Pablo');
console.log('' || 'Pablo');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hola' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND -----');
console.log(0 && 'Pablo');
console.log(27 && 'Pablo');

console.log('Hola', 27, null, 'Pablo');

// Ejemplo practico
if (restaurant.orderPizza) {
  restaurant.orderPizza('hongos', 'espinaca');
}
// dos formas de escribir lo mismo con if y con &&
restaurant.orderPizza && restaurant.orderPizza('hongos', 'espinaca');

// lo opuesto a OR, hace short-circuiting con el primer valor falsy que lee
 */

/* 
//////////////////////////////// Rest patter and parameters ////////////////////////
// Rest, porque esta del lado izquierdo de =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objetos
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//  2) Functions en este caso es llamado rest parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('hongos', 'onion', 'olives', 'espinaca'); */

/* 
////////////////////////SPREAD OPERATOR (...)///////////////////////////////////////
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

// mejor forma de mostrar todos los elementos de un array
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//  copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// El spead operator '...' funciona en todos los iterables, como por ejemplo arrays, string, maps or sets pero no objetos.
const str = 'Pablo';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);
// luego de ES6
restaurant.orderPasta(...ingredients);

// despues de 2018 ... tambien funciona con los objetos por mas que no sean iterables
// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Pablo' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Super resto';
console.log(restaurantCopy.name);
console.log(restaurant.name);
 */
/*  

///////////////////////////DESTRUCTURING OBJECTS///////////////////////////////////////
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//podemos crear la variable menu y le damos el valor inicial default [], de lo contraterio solo aparecera como undefined, con starterMenu hacemos lo mismo pero ya que esta propiedad si existe dentro del objeto no va a tomar el valor por default




//////////////////////////////////// DEFAULT VALUES//////////////////////////////////////
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// cuando empezamos una linea de codigo con {}, js espera un bloque de codigo, para solucionar el error de unexpected token tenemos que poner toda la linea entre ()
({ a, b } = obj);
console.log(a, b);

// NESTED OBJECTS
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
 */

/*///////////////// DESTRUCTURING ARRAYS///////////////////////////////////////////////

/* usamos destructuracion para separar valores de un array y almacenarlos dentro de variables de una forma sencilla 

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// forma de destructurar el array, dejando el espacio en medio podemos hacer que devuelva el primer y tercer valor
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// CAMBIANDO VARIABLES
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// recibe 2 valores de retorno de una funcion
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// destructuracion anidada
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// valores por defecto
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
/* 
// CODING CHALLENGE 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1)Create an array 'events' of the different game events that happened (no duplicates)

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2)After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3)Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

/* 4)Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽GOAL 

for (const [min, ev] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${ev}`);
}
 */
