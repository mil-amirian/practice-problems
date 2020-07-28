
var numberArray = [6, 7, 8, 9, 10]

var sum = numberArray.reduce(sumArray)
console.log(`Array = ${numberArray}`)
console.log("Sum of array:", sum)

function sumArray(total, num) {
    return total + num
}
