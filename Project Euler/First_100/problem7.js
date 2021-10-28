function isPrime(number) {
  if (number == 1) {
    return false;
  } else if (number < 4) {
    return true;
  } else if (number % 2 == 0) {
    return false;
  } else if (number < 9) {
    return true;
  } else if (number % 3 == 0) {
    return false;
  } else {
    let limit = Math.floor(Math.sqrt(number));
    let factor = 5;
    while (factor <= limit) {
      if (number % factor == 0) {
        return false;
      } else if (number % (factor + 2) == 0) {
        return false;
      }
      factor += 6;
    }
  }
  return true;
}

function theNthPrime(limit) {
  let count = (candidate = 1);
  while (count < limit) {
    candidate += 2;
    if (isPrime(candidate)) {
      count = count + 1;
    }
  }
  return candidate;
}

console.log(theNthPrime(10001));
