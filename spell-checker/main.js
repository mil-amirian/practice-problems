const userCorrectWords = []
const incorrectWords = []

function spellChecker(userWords, correctWords) {
    for (let i = 0; i < userWords.length; i++) {
        if (userWords[i] === correctWords[i]) {
            userCorrectWords.push(userWords[i])
        } else {
            incorrectWords.push(userWords[i])
        }
    }
    return `correct: ${userCorrectWords}, incorrect: ${incorrectWords}`
}



console.log(spellChecker(["boy", "duct", "ice cream", "sendwich"], ["boy", "duck", "ice cream", "sandwich"])) // -> { correct: ["boy", "ice cream"], incorrect: ["duct", "sendwich"]}
console.log(spellChecker(["jam", "breat", "sound"], ["jam", "bread","sound"])) // -> {correct: ["jam", "sound"], incorrect:["breat"]}
console.log(spellChecker(["java", "CDS", "HTMO"], ["java", "CSS","HTML"])) // -> {correct: ["java"], incorrect: ["CDS","HTMO"]}