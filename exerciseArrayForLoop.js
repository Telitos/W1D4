// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(person, index) {
    if (person === "Waldo")
      found(index)
  })
};

function actionWhenFound(location) {
  console.log("Found him at: " + location + "!");
};


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);