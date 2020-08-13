function zipCodeValidator(zipToValidate) {
    if (!isNaN(zipToValidate) && zipToValidate.length===5) {
        return true
    } else {
        return false
    }
}

console.log(zipCodeValidator("21594")) // -> true
console.log(zipCodeValidator("3Eds32")) // -> false
console.log(zipCodeValidator("9123465")) // -> false
