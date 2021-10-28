function divisbleBy1ToX(x) {
  let start = performance.now();
  let smallestNumber = 1;
  for (let dividend = 0; dividend < x; dividend++) {
    if (smallestNumber % dividend === 0) {
      //pass
    } else {
      smallestNumber++;
      dividend = 1;
    }
  }
  let end = performance.now();
  console.log("Time: ", end - start);
  return smallestNumber;
}

console.log(divisbleBy1ToX(20));
