function sumOfRefactor(target) {
  let totalSum = 0;
  for (let number = 0; number < target; number++) {
    if (number % 3 === 0 || number % 5 === 0) {
      totalSum += number;
    }
  }
  return totalSum;
}

function sumOf(number, target) {
  var p = (target / number) >> 0;
  return ((number * (p * (p + 1))) / 2) >> 0;
}

console.log(sumOfRefactor(1000));
console.log(sumOf(3, 999) + sumOf(5, 999) - sumOf(15, 999));
