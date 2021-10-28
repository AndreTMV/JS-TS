function sumOfSquares(limit) {
  return (2 * limit + 1) * (limit + 1) * (limit / 6);
}

function squareOfSum(limit) {
  return ((limit * (limit + 1)) / 2) * ((limit * (limit + 1)) / 2);
}

console.log(squareOfSum(100) - sumOfSquares(100));
