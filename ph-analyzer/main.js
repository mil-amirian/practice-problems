function phAnalyzer(phValue) {
    if (phValue >= 0 && phValue < 7) {
        return "ACID";
    } else if (phValue === 7) {
        return "NEUTRAL";
    } else if (phValue > 7 && phValue <= 14) {
        return "ALKALINE"
    } else {
        return "invalid pH value"
    }
}

console.log(phAnalyzer(7))
console.log(phAnalyzer(4))
console.log(phAnalyzer(12))
console.log(phAnalyzer(25))