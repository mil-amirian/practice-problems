function getWordCount(sentence) {
    words = 0
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
              words += 1
        }
    }
    return words + 1
}

getWordCount("I will not fear, fear is the mind killer")

// "This is a sample sentence"
// "Han shot first"
// "I will not fear, fear is the mind killer"