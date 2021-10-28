function numberDivisors(number) {
    var divisor = 2;
    var exponent = 0;
    var count = 1;
    while (number > 1) {
        exponent = 0;
        while (number % divisor == 0) {
            number /= divisor;
            exponent += 1;
        }
        count *= exponent + 1;
        divisor += 1;
    }
    return count;
}
function triangleDivisorGreater(limit) {
    var position = 1;
    var numberOfDivisors = 0;
    var leftDivisor = 1;
    var rightDivisor = 0;
    for (position = 1;; position++) {
        if ((position + 1) & 1) {
            rightDivisor = numberDivisors(position + 1);
        }
        else {
            rightDivisor = numberDivisors((position + 1) / 2);
        }
        numberOfDivisors = leftDivisor * rightDivisor;
        if (numberOfDivisors > limit) {
            return (position * (position + 1)) / 2;
        }
        leftDivisor = rightDivisor;
    }
}
console.log(triangleDivisorGreater(500));
