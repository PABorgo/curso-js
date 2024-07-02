const country = "Argentina";
const continent = "America";
let population = 5400000;
console.log(country, continent, population);

const isIsland = true;
let language;

console.log(
  typeof isIsland,
  typeof country,
  typeof language,
  typeof population
);

language = "spanish";

/* 1. If your country split in half, and each half would contain half the population,
then how many people would live in each half? */
const halfPopulation = population / 2;

/* 2. Increase the population of your country by 1 and log the result to the console
 */
population++;
console.log(population);

/* 3. Finland has a population of 6 million. Does your country have more people than
Finland? */
if (population > 6000000) {
  console.log(`${country} doesn't have more people than Finland`);
} else {
  console.log(`${country} has more people than Finland`);
}

/* 4. The average population of a country is 33 million people. Does your country
have less people than the average country? */
const avgPopulation = 33000000;
if (population < avgPopulation) {
  console.log(`${country} has less people than the average country`);
} else console.log(`${country} has more people than the average country`);

/* 5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese' */

/* const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
} */

if (language === "english" && population < 50000000 && isIsland === false) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}
