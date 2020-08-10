function freeCoffeeCups(coffeeCups) {
    var totalFreeCoffeeCups = 0
    for (var i = coffeeCups; i >= 0; i--) {
        if (i % 6 === 0) {
            totalFreeCoffeeCups += 1
        } 
    }
    totalFreeCoffeeCups = totalFreeCoffeeCups - 1
    return coffeeCups + totalFreeCoffeeCups
}

console.log(freeCoffeeCups(13)) // -> 15
console.log(freeCoffeeCups(6)) // -> 7
console.log(freeCoffeeCups(5))// -> 5

