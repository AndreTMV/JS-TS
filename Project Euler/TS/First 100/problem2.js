function fibonacci(limit) {
    var first = 1;
    var second = 1;
    var third = first + second;
    var totalSum = 0;
    while (third < limit) {
        totalSum += third;
        first = third + second;
        second = first + third;
        third = first + second;
    }
    return totalSum;
}
console.log(fibonacci(4000000));
