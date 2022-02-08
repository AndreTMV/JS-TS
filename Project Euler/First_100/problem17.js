let ones = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

let tens_ones = {
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: ones[4] + "teen",
  15: "fifteen",
  16: ones[6] + "teen",
  17: ones[7] + "teen",
  18: ones[8] + "een",
  19: ones[9] + "teen",
};

let tens = {
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

const numberToWord = (number) => {
  let words;
  if (number < 10) {
    return ones[number];
  }
  if (10 <= number && number <= 19) {
    return tens_ones[number];
  }
  if (20 <= number && number <= 99) {
    if (number % 10 == 0) return tens[number];
    else {
      words = tens[((number / 10) >> 0) * 10] + ones[number % 10];
      return words;
    }
  }
};

const numberToHundred = (number) => {
  let words;
  if (number == 1000) return "onethousand";
  if (number % 100 == 0) return ones[number / 100] + "hundred";
  let hundred_place = ones[(number / 100) >> 0] + "hundred";
  let decimal_place = numberToWord(number % 100);
  words = hundred_place + "and" + decimal_place;
  return words;
};

const main = () => {
  let total = 0;
  for (let number = 1; number <= 1000; number++) {
    let words;
    if (number < 100) {
      words = numberToWord(number);
      total += words.length;
    } else {
      words = numberToHundred(number);
      total += words.length;
    }
  }
  console.log(total);
};

main();
