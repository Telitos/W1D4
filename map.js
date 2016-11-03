/* Make a map function:
(array * function) --> newArray

function is genereal, must simply apply the function
in the argument to each of the element of the array
and push each item product into a new array, in the same order.

first make var newArray = [] to push the new elements into.

then make a function that uses forEach to go through each
element of inital array and apply the function to it.
Call it transformative funciton

*/

function custoMap (array, transformativeFunction){
  var newArray = []

  array.forEach(function(element) {
    newArray.push(transformativeFunction(element))
  })
  return newArray
}

var test = custoMap(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });
console.log(test)