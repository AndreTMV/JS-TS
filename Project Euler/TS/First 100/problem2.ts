function fibonacci (limit: number) {
  let first:number = 1;
  let second:number = 1;
  let third:number = first + second;
  let totalSum:number =0;
  while (third < limit) {
    totalSum += third;
    first = third + second;
    second = first + third;
    third = first + second;
  }
  return totalSum;
}

console.log(fibonacci(4000000))
