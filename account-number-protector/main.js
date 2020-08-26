function accountNumberProtector(cardNumberString) {
    let hiddenNumber = ''
    for (var i = cardNumberString.length-4; i < cardNumberString.length; i++) {
        hiddenNumber += cardNumberString[i]
        
    }
    return `**${hiddenNumber}`
}

console.log(accountNumberProtector("5543223485638832")) // -> "**8832"
console.log(accountNumberProtector("8934235477210943")) // -> "**0943"
console.log(accountNumberProtector("7513635499320192")) // -> "**0192"
