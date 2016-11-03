var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
/* use the array.prototype.sort() function.
sort(compareFunction(a,b)) is the key. if a and b
are the two elements being compared, then sort order is
defined as follows: nction(a, b) is less than 0, sort a to a
lower index than b, i.e. a comes first.

If compareFunction(a, b) returns 0, leave a and b unchanged
with respect to each other, but sorted with respect to all
different elements.

If compareFunction(a, b) is greater than 0, sort b to a
lower index than a.

compareFunction(a, b) must always return the same value when given
a specific pair of elements a and b as its two arguments.
 If inconsistent results are returned then the sort order is undefined.

 make a function that sorts the array first by names,
 then by age if the names are equal.

 Implementation:

 1) if name is same, then use array.sort() as is.
 else use comparator function */


// function comparator(a,b) {
  // return a.age - b.age
// }
// students.sort(function (a,b) {
//  return a.age - b.age
// })

var advancedSorting = students.sort(function (a,b) {
  if (a.name === b.name) {
    return a.age > b.age
  } else {
    return a.name > b.name
  }
})


console.log(advancedSorting)