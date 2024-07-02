// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// console.log(massMark, heightMark, massJohn, heightJohn);

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// console.log(bmiMark, bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;

// console.log(markHigherBMI);


// // comienzo del segundo challenge

// if(markHigherBMI){
//    console.log(`Mark's bmi (${bmiMark}) is higher than John's ${bmiJohn}!`);
// } else{
//    console.log(`John's bmi (${bmiJohn}) is higuer than Mark's! ${bmiMark}`);
// }

// CHALLENGE NUMBER 3

// numero 1
// const dolphinsAverage = (69+108+89)/3;
// const koalasAverage = (88+91+110)/3;

// console.log(dolphinsAverage);
// console.log(koalasAverage);

// if(dolphinsAverage > koalasAverage){
//    console.log('El ganador es Team Dolphins');
// } else if(dolphinsAverage < koalasAverage){
//    console.log('El ganador es Team Koalas');
// } else {
//    console.log('La competencia termina en empate');
// }

// BONUS NUMERO 1 y 2 al mismo tiempo

// const dolphinsAverage = (97+112+101)/3;
// const koalasAverage = (109+95+123)/3;

// console.log(dolphinsAverage);
// console.log(koalasAverage);

// if(dolphinsAverage >= 100 && koalasAverage >= 100){
//    if(dolphinsAverage > koalasAverage){
//           console.log('El ganador es Team Dolphins');
//        } else if(dolphinsAverage < koalasAverage){
//           console.log('El ganador es Team Koalas');
//        } else {
//           console.log('La competencia termina en empate');
//        }
// }else{
//    console.log('Este año no hay ganadores');
// }

const bill = 430;

const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;


console.log(`The bill was ${bill}, the tip vas ${tip}, and the total value ${bill + tip}`);

