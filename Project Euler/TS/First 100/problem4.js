function reverse(selectedNumber) {
    var reversedNumber = 0;
    while (selectedNumber > 0) {
        reversedNumber = (reversedNumber * 10) + (selectedNumber % 10);
        selectedNumber = (selectedNumber / 10) >> 0;
    }
    return reversedNumber;
}
function isPalindrome(first, second) {
    var selectedNumber = first * second;
    return first * second === reverse(selectedNumber);
}
function biggest3DigitPalindrome() {
    var largestPalindrome = 0;
    var first = 1000;
    while (first > 0) {
        var second = first;
        while (second > 0) {
            if ((first * second) <= largestPalindrome) {
                break;
            }
            if (isPalindrome(first, second)) {
                largestPalindrome = first * second;
            }
            second -= 1;
        }
        first -= 1;
    }
    return largestPalindrome;
}
console.log(biggest3DigitPalindrome());
