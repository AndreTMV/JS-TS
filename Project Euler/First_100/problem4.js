function reverse(number) {
  let reverseNumber = 0;
  while (number > 0) {
    reverseNumber = reverseNumber * 10 + (number % 10);
    number = (number / 10) >> 0;
  }
  return reverseNumber;
}

function isPalindrome(first, second) {
  return first * second === reverse(first * second);
}

function biggestPalindorme3Digits() {
  let start = performance.now();
  let maxProduct = 0;
  for (let first = 0; first < 1000; first++) {
    for (let second = 0; second < 1000; second++) {
      // for (let third = 0; third < 1000; third++) {
      let product = first * second; // * third;
      if (product === reverse(product)) {
        if (product > maxProduct) {
          maxProduct = product;
        }
      }
      // }
    }
  }
  let end = performance.now();
  console.log("Time: ", end - start);
  return maxProduct;
}

function refactoredFunction() {
  let start = performance.now();
  let largestPalindrome = 0;
  let first = 1000;
  while (first > 0) {
    let second = first;
    while (second > 0) {
      if (first * second <= largestPalindrome) {
        break;
      }
      if (isPalindrome(first, second)) {
        largestPalindrome = first * second;
      }
      second -= 1;
    }
    first -= 1;
  }
  let end = performance.now();
  console.log("Time: ", end - start);
  return largestPalindrome;
}

console.log("First try: ", biggestPalindorme3Digits());
console.log("Second try: ", refactoredFunction());
