
function wordBuilder(wordToSpell) {
    var lettersAccum = ''
    var result = []
    for (var i = 0; i < wordToSpell.length; i++) {
        lettersAccum += wordToSpell[i]
        result.push(lettersAccum)
    }
    return result
}

console.log(wordBuilder("JavaScript")) // -> ["J", "Ja", "Jav", "Java", "JavaS", "JavaSc", "JavaScr", "JavaScri", "JavaScrip", "JavaScript"]
console.log(wordBuilder("Moon")) // -> ["M", "Mo", "Moo", "Moon"]
console.log(wordBuilder("Stars"))