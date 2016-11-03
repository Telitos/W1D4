var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
// map runs trhough each element of the array and applies
// the given fuinction to them and returns the results in
// an array.

var result = input.map(function(object){
  return Math.sqrt((Math.pow(object.x, 2) + Math.pow(object.y, 2)))
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);