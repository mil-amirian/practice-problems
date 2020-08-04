function isTheAverageWhole(numbersArray) {
    var addUpNumbers = 0
    for (var i = 0; i < numbersArray.length; i++) {
        addUpNumbers += numbersArray[i]
    }
    if (addUpNumbers % numbersArray.length === 0) {
        return true;
    } else {
        return false
    }
}

isTheAverageWhole([1, 3, 4, 4]) // -> true
isTheAverageWhole([3, 4]) // -> false
isTheAverageWhole([5, 5, 5]) // -> true
