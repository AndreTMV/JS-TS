function Fibonacci(target) {
  let first = (second = 1);
  let third = first + second;
  let totalSum = 0;
  while (third < target) {
    totalSum += third;
    first = second + third;
    second = first + third;
    third = first + second;
  }
  return totalSum;
}

console.log(Fibonacci(4000000));
