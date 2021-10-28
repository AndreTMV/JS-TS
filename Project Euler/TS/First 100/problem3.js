function largestPrimeFactor(selectedNumber) {
  var lastFactor = 0;
  if (selectedNumber % 2 == 0) {
    lastFactor = 2;
    selectedNumber /= 2;
  } else {
    lastFactor = 1;
  }
  var factor = 3;
  var maxFactor = Math.sqrt(selectedNumber);
  while (selectedNumber > 1 && factor <= maxFactor) {
    if (selectedNumber % factor == 0) {
      selectedNumber /= factor;
      lastFactor = factor;
      while (selectedNumber % factor == 0) {
        selectedNumber /= factor;
      }
      maxFactor = Math.sqrt(selectedNumber);
    }
    factor += 2;
  }
  if (selectedNumber === 1) {
    return lastFactor;
  } else {
    return selectedNumber;
  }
}
console.log(largestPrimeFactor(600851475143));
