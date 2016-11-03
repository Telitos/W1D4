'use strict'
/* Creat a function cheatDie that

*/

const loadedDie = (function () {
  let roll = 0
  let list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];


  return function(){
    roll ++
    return list[roll]
  }
})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6
