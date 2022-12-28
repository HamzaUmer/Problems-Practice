//Question: Change randomFraction to return a random number instead of returning 0.
function randomFraction() {
  var result = 0;

  while (result === 0) {
    result = Math.random();
  }

  return result;

}

console.log(randomFraction())
