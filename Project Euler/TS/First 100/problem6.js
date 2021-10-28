function sumOfSquares(limit) {
    var sumOfSquares = ((2 * limit + 1) * (limit + 1)) * (limit / 6);
    return sumOfSquares;
}
function squareOfSum(limit) {
    var squareOfSum = limit * (limit + 1) / 2;
    return squareOfSum * squareOfSum;
}
function squareMSum(limit) {
    return squareOfSum(limit) - sumOfSquares(limit);
}
console.log(squareMSum(100));
