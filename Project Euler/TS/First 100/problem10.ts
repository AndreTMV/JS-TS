function isPrime (selectedNumber: number):boolean {
  if (selectedNumber == 1) {
    return false;
  }
  else if (selectedNumber < 4) {
    return true;
  }
  else if(selectedNumber % 2 == 0){
    return false;
  }
  else if(selectedNumber < 9){
    return true;
  }
  else if(selectedNumber % 3 == 0){
    return false;
  }
  else{
    let limite: number = Math.floor(Math.sqrt(selectedNumber));
    let factor: number = 5;
    while(factor <= limite){
      if (selectedNumber % factor == 0) {
        return false;
      }
      else if (selectedNumber % (factor + 2) == 0){
        return false;
      }
      factor += 6;
    }
  }
  return true;
}

function sumOfPrimes(limit:number) {
  let totalSum:number = 0;
  for (let number:number = 0; number < limit; number++) {
    if(isPrime(number)){
      totalSum += number;
    }
  }
  return totalSum;
}

console.log(sumOfPrimes(2000000));
