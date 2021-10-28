function gcd(number1:number, number2:number):number {
  if (!number2) {
    return number1;
  }
  return gcd(number2, number1 % number2);
}

function pythagoricTriplet(expectedAnswer:number):number {
  let a:number =  0;
  let b:number = 0;
  let c:number = 0;
  let d:number = 0;
  let n:number = 0;
  let factor:number = 0;
  let reduced:number = 0;
  let answer:number = expectedAnswer;
  let limit:number = Math.ceil(Math.sqrt(expectedAnswer));
  expectedAnswer /= 2;
  for (let number = 2; number < limit; number++) {
    if (expectedAnswer % number == 0) {
      reduced = expectedAnswer / 2;
      while (reduced % 2 == 0) {
        reduced /= 2;
      }
      if (number % 2 == 1) {
        factor = number + 2;
      } else {
        factor = number + 1;
      }
      while (factor < 2 * number && factor <= limit) {
        if (reduced % factor == 0 && gcd(factor, number) == 1) {
          d = expectedAnswer / (factor * number);
          n = factor - number;
          a = d * (number * number - n * n);
          b = 2 * d * number * n;
          c = d * (number * number + n * n);
          if (a + b + c == answer) {
            return a * b * c;
          }
        }
        factor += 2;
      }
    }
  }
}

console.log(pythagoricTriplet(1000))
