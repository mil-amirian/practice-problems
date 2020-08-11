function isSantaComing(date) {
    if (date.getMonth() === 11 && date.getDate() === 24) {
        return true
    } else {
        return false
    }
}



console.log(isSantaComing(new Date(2001, 11, 24))) // -> true
console.log(isSantaComing(new Date(2018, 7, 4))) // -> false
console.log(isSantaComing(new Date(1995, 11, 23, 23, 59, 59))) // -> false