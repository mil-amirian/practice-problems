function createRepeatingLetters(string, numOfRepeats) {
    var repeatedLetters = ""
    for (var i = 0; i < string.length; i++) {
        var finalExpression = string[i].repeat(numOfRepeats)
        repeatedLetters += finalExpression

    }
    console.log(repeatedLetters)
    
}

createRepeatingLetters("John", 3) // -> "JJJooohhhnnn"
createRepeatingLetters("car", 4) // -> "ccccaaaarrrr"
createRepeatingLetters("howdy", 1) // -> "howdy"