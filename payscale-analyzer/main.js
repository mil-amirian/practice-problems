function payscaleAnalyzer(payList) {
    var highest = Math.max.apply(null, payList)
    var lowest = Math.min.apply(null, payList)
    var difference = highest - lowest
    return difference
}

console.log(payscaleAnalyzer([28, 34, 21, 39]))   // -> 18
console.log(payscaleAnalyzer([18, 22, 19, 26]))   // -> 8
console.log(payscaleAnalyzer([41.50, 27.25, 32.50, 29.60]))  // -> 14.25