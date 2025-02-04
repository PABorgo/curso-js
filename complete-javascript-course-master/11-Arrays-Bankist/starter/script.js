'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // esto se utiliza para vaciar todo lo que tenemos en el display por defecto
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
                  <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
                  <div class="movements__value">${mov}€</div>
                </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
    // se usa insertAdjacentHTML para insertar el codigo de html al archivo index.html, el primer parametro indica donde sera insertado, se puede buscar mas en MDN, y el segundo parametro es basicamnte el string que debe ser insertado, el cual es el string de codigo de html
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// ---------------- MAP FUNCTION --------------
/* const euroToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * euroToUsd);

// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });
// dos formas de hacer lo mismo

// console.log(movements);
// console.log(movementsUSD);
// otra forma de cambiar los movimientos a usd pero con un metodo logico,
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
// console.log(movementsUSDfor);

// otro ejercicio de ejemplo
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);


console.log(accounts); */

// --------------------------------
/* FILTER METHOD
const withdrawalsFilter = movements.filter(mov => mov < 0);
console.log(withdrawalsFilter);
 */

// ------------------------
// REDUCE METHOD
// const balance = movements.reduce(function (acc, mov, i, arr) {
//   console.log(`Iteration n° ${i}: ${acc}`);
//   return acc + mov;
// }, 0);
const balance2 = movements.reduce((acc, mov) => acc + mov, 0);

console.log(balance2);
/////////////////////////////////////////////////
/* SLICE ------------
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log([...arr]);

// SPLICE - funciona casi que slice con la diferencia de que este metodo modifica el array original.
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE - este metodo da vuelta el array completamente, y cuando es utilizado se modifica el array original.
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT - no produce cambios en el array original
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // dos formas de hacer lo mismo, solo depende de eleccion personal

// JOIN
console.log(letters.join(' - '));
 */
/* 
// AT METHOD ------------------------
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element, tres formas distintas de hacer lo mismo
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1));
console.log(arr.at(-1));
// este metodo tambien se puede usar en strings

console.log('pablo'.at(0));
console.log('pablo'.at(-1));
 */

// FOR EACH method, de esta forma vamos a poner dos posibles formas de hacer lo mismo
// ----------------------------------------------------
/* for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Mat.abs(mov)}`);
  }
}
console.log('--- FOR EACH ---');
// el forEach es una funcion de alto orden que tiene la tarea de recorrer todos los elementos del array, aplicando la funcion que es pasada por parametros, dicha funcion recibe como parametros el 1:valor actual del elemento del array que esta recorriendo, 2:el indice del elemento actual, 3: el array completo que esta recorriendo. Esta es la forma mas clara y limpia de escribir el codigo
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Mat.abs(mov)}`);
  }
});

// una de las diferencias fundamentales es que no se puede usar 'continue' y 'break en el forEach, este siempre recorrera todo el array. Si de verdad es necesario usar break en algun momento del recorrido es mejor usar el for of loop para recorrer un array
 */

// CODING CHALLENGE NUMEBER 1
/* Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4] */
/* 
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrect = dogsJulia.slice(1, -2);
  console.log(dogsJuliaCorrect);

  const allDogs = dogsJuliaCorrect.concat(dogsKate);
  console.log(allDogs);

  allDogs.forEach(function (age, ind) {
    const isAdult = age > 2 ? 'an adult' : 'still a puppy';

    console.log(
      `Dog number ${ind + 1} is ${isAdult}, and is ${age} ${
        age === 1 ? 'year' : 'years'
      } old.`
    );
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
 */

// CHALLENGE NUMBER 2

const calcAverageHumanAge = function (ages) {
  // 1.Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2*dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
  const humanAge = ages.map(dogAge =>
    dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
  );

  // 2. Exclude all dogs that are less than 18 human years old ( wich is the same as keeping dofs that are at least 18 years old)
  const adults = humanAge.filter(age => age >= 18);

  // 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages)
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  console.log(`human age: ${humanAge.join(', ')}`);
  console.log(`18 age: ${adults.join(', ')}`);
  console.log(`average age: ${average}`);

  return average;
};
//4. Run the function for both test datasets
console.log('test 1 ----------');
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log('test 2 ----------');
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
