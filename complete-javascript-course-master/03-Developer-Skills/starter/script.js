// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
 */

// CODING CHALLENGE #1

/* Given an array of forecasted maximun temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ...""

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to te console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
//  1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? answer: index+1

// 2) Breaking up into sub-problems
// - transform the array into a string
// - transform each element to string with °C
// - Strings needs to contain day (index + 1)
// - Add ...  between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "... ";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log(str);
};

printForecast(data2);
