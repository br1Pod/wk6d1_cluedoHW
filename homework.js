// #### Episode 1


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);



// I think the code will return Miss Scarlett


// ====================================================
// Episode 2


// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// I think the code will return Prof Plum
// actually throws an error for attempted const re-assignment (Plum still going to jail IMHO)




// ====================================================
// #### Episode 3


// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// First Verdict = Mrs P
// function scope can see and thus overwrite the let variable

// Second Verdict = Prof P
// function is not called, so default variable assignment stands




// ====================================================
// #### Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Output should be ...
// Miss Scarlet, Professor Plum, Mrs Peacock
// Mrs Peacock 

// first log calls function, which can see and overwrite the initial variable3.
// second log does not call the function, so variable is not reassigned




// ====================================================
// Episode 5
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// calling changeWeapon with revolver should error
// the log should therefore return `The weapon is the Candle Stick
// ... got this wrong, thought that as scenario was a const, it could not be altered. Apparently it can :/





// ====================================================
// Episode 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// the murderer is changed to Mr Green, then, in a sudden plot plotTwist, we find out the murderer was really Mrs White all along. The audience are stunned!




// ====================================================
// Episode 7

// let murderer = 'Professor Plum';
// // *** next line are my test logs ***
// console.log('line 157 =', murderer)
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//   // *** next line are my test logs ***
//   console.log('line 160 =', murderer)

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//     // *** next line are my test logs ***
//     console.log('line 164 =', murderer)

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//       // *** next line are my test logs ***
//       console.log('line 168 =', murderer)
//     }
//     // *** next line are my test logs ***
//     console.log('line 170 =', murderer)
//     unexpectedOutcome();
//   }
//   // *** next line are my test logs ***
//   console.log('line 173 =', murderer)
//   plotTwist();
//   // *** next line are my test logs ***
//   console.log('line 175 =', murderer)
// }
// // *** next line are my test logs ***
// console.log('line 177 =', murderer)
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
// // *** next line are my test logs ***
// console.log('line 181 =', murderer)
// changeMurderer();
// // *** next line are my test logs ***
// console.log('line 183 =', murderer)
// const verdict = declareMurderer();
// console.log(verdict);

// murderer is mr green
// added a load of console logs to try and follow the scope.
// still unsure why murderer can be changed by first function, yet the nested functions don't permanently alter murderer (despite being called within the changeMurderer func ?? ). Look forward to seeing solution in class




// ====================================================
// #### Episode 8


// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// weapon candle stick
// easier to follow this, plotTwist argument changes room - which changes murderer
// passing mustard into unexpectedOutcome matches the murderer name, so weapon gets changed





// ====================================================
// #### Episode 9


let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
  // *** next line are my test logs ***
  console.log('line259 = ', murderer)
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);


// murderer is changed but only within scope of if block. unchanged outside.