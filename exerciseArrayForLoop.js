// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  location = 0
  arr.forEach(function(person) {
    if (person === "Waldo")
      found(location)
    location ++
  })
}

function actionWhenFound(x) {
  console.log("Found him at: " + x + "!");
}

findWaldo(["Waldo", "Alice", "Bob", "Winston"], actionWhenFound);
