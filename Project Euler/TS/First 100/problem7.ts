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

function theNthestPrime () {
  let number:number = 1;
  let count: number = 1;
  while (count < 10001){
    number += 2;
    if(isPrime(number)){
      count++;
    }
  }
  return number;
}

console.log(theNthestPrime());
