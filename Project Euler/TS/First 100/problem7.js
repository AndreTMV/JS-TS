function isPrime(selectedNumber) {
    if (selectedNumber == 1) {
        return false;
    }
    else if (selectedNumber < 4) {
        return true;
    }
    else if (selectedNumber % 2 == 0) {
        return false;
    }
    else if (selectedNumber < 9) {
        return true;
    }
    else if (selectedNumber % 3 == 0) {
        return false;
    }
    else {
        var limite = Math.floor(Math.sqrt(selectedNumber));
        var factor = 5;
        while (factor <= limite) {
            if (selectedNumber % factor == 0) {
                return false;
            }
            else if (selectedNumber % (factor + 2) == 0) {
                return false;
            }
            factor += 6;
        }
    }
    return true;
}
function theNthestPrime() {
    var number = 1;
    var count = 1;
    while (count < 10001) {
        number += 2;
        if (isPrime(number)) {
            count++;
        }
    }
    return number;
}
console.log(theNthestPrime());
