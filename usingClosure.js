'use strict'
/* Creat a function cheatDie that

*/

const loadedDie = (function () {
  let roll = - 1
  let list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];


  return function(){
    roll ++
    return list[roll]
  }
})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6




const countdownGenerator = function (x) {
 let timeLeft = x

  return function() {
    if (timeLeft < 0) {
      console.log("Rockets already gone, bub !")
        } else if ( timeLeft === 0) {
      console.log("Blast Off!")
        } else {
      console.log("T-minus " + timeLeft + "...")
        }
        timeLeft -= 1
      }
    };

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
