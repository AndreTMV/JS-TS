function sumOfSquares (limit: number) {
  let sumOfSquares:number = ((2*limit+1)*(limit+1))*(limit / 6);
  return sumOfSquares;
}

function squareOfSum (limit: number) {
  let squareOfSum:number = limit*(limit+1) / 2;
  return squareOfSum*squareOfSum;
}

function squareMSum (limit: number) {
  return squareOfSum(limit)-sumOfSquares(limit);
}

console.log(squareMSum(100));
