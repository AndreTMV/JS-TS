function numberDivisors(number:number):number {
  let divisor:number = 2;
  let exponent:number = 0;
  let count:number = 1;
  while (number > 1) {
    exponent = 0;
    while (number % divisor == 0) {
      number /= divisor;
      exponent += 1;
    }
    count *= exponent + 1;
    divisor += 1;
  }
  return count;
}

function triangleDivisorGreater(limit:number):number {
  let position:number = 1;
  let numberOfDivisors:number = 0;
  let leftDivisor:number = 1;
  let rightDivisor:number = 0;
  for (position = 1; ; position++) {
    if ((position + 1) & 1) {
      rightDivisor = numberDivisors(position + 1);
    } else {
      rightDivisor = numberDivisors((position + 1) / 2);
    }
    numberOfDivisors = leftDivisor * rightDivisor;
    if (numberOfDivisors > limit) {
      return (position * (position + 1)) / 2;
    }
    leftDivisor = rightDivisor;
  }
}

console.log(triangleDivisorGreater(500));
