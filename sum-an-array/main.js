
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var sum = numberArray.reduce(sumArray)
console.log(sum)

function sumArray(total, num) {
    return total + num
}
