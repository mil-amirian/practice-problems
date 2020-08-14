function payscaleAnalyzer(payList) {
    const highest = Math.max.apply(null, payList)
    const lowest = Math.min.apply(null, payList)
    const difference = highest - lowest
    return difference
}

console.log(payscaleAnalyzer([28, 34, 21, 39]))   // -> 18
console.log(payscaleAnalyzer([18, 22, 19, 26]))   // -> 8
console.log(payscaleAnalyzer([41.50, 27.25, 32.50, 29.60]))  // -> 14.25