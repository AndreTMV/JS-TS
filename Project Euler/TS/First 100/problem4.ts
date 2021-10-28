function reverse(selectedNumber:number) {
  let reversedNumber:number = 0;
  while (selectedNumber >0 ) {
    reversedNumber = (reversedNumber*10) + (selectedNumber % 10);
    selectedNumber= (selectedNumber / 10) >> 0;
  }
  return reversedNumber;
}

function isPalindrome(first:number, second:number) {
  let selectedNumber:number = first*second;
  return first*second === reverse(selectedNumber);
}

function biggest3DigitPalindrome () {
  let largestPalindrome:number = 0;
  let first:number = 1000;
  while (first > 0) {
    let second:number = first;
    while(second > 0){
      if ((first*second) <= largestPalindrome) {
        break;
      }
      if(isPalindrome(first, second)){
        largestPalindrome = first * second
      }
      second -= 1;
    }
    first -= 1;
  }
  return largestPalindrome;
}

console.log(biggest3DigitPalindrome());
