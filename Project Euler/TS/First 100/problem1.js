function sumOf(number, target) {
    var p = (target / number) >> 0;
    return ((number * (p * (p + 1))) / 2) >> 0;
}
console.log(sumOf(3, 999) + sumOf(5, 999) - sumOf(15, 999));
