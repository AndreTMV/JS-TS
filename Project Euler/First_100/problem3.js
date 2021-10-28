function largestPrimeFactor(number) {
  let lastFactor = 0;
  if (number % 2 === 0) {
    lastFactor = 2;
    number /= 2;
  } else {
    lastFactor = 1;
  }
  let factor = 3;
  let maxFactor = Math.sqrt(number);
  while (number > 1 && factor <= maxFactor) {
    if (number % factor === 0) {
      number /= factor;
      lastFactor = factor;
      while (number % factor === 0) {
        number /= factor;
      }
      maxFactor = Math.sqrt(number);
    }
    factor += 2;
  }
  if (number === 1) {
    return lastFactor;
  } else {
    return number;
  }
}

console.log(largestPrimeFactor(600851475143));
