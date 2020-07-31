function decimalPlaceCounter(stringNumber) {
    var accumulator = 0
    for (var i = 0; i < stringNumber.length; i++) {
        if (stringNumber[i] === ".") {
            accumulator = stringNumber.length - i - 1
        }
    }
    return accumulator
}
console.log(decimalPlaceCounter("127.245")) // -> 3
console.log(decimalPlaceCounter("145")) // -> 0
console.log(decimalPlaceCounter("23.00")) // -> 2