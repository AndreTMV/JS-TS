function divisibleBy1ToX(x: number) {
  let smallestNumber = 1;
  for (var number = 1; number <= x; number++) {
    if (smallestNumber % number == 0) {
      
    }
    else{
      smallestNumber += 1;
      number = 1;
    }
  }
  return smallestNumber;
}

console.log(divisibleBy1ToX(20));
