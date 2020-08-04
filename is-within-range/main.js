// 1. Create a function that takes two parameters - number and an object
// 2. The function must check whether the first parameter is within the range specified in the object
// 3. check whether the number parameter is greater than the min value of the object and less than the max value of the object
// 4. if the value is within the range of the object key value pairs, return true
// 5. if not, return false
// 6. console log the result

function isWithinRange(num, rangeObject) {
    if (num >= rangeObject.min && num <= rangeObject.max) {
        return true;
    } else {
        return false;
    }
}

console.log(isWithinRange(5, { min: 1, max: 9 }))
console.log(isWithinRange(12, { min: 15, max: 29 }))
console.log(isWithinRange(9, {min: 0, max: 9}))