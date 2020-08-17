function dayFinder(stringDate) {
    let daysOfTheWeekArr = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
    let date = new Date(stringDate)
    let dayOfWeek = date.getDay()
    for (let i = 0; i < daysOfTheWeekArr.length; i++) {
        if ((dayOfWeek-1) === i) {
            return daysOfTheWeekArr[i]
        }
    }
}

console.log(dayFinder("05/22/1946")) // -> "Wednesday"
console.log(dayFinder("01/20/2001")) // -> "Saturday"
console.log(dayFinder("03/15/1988")) // -> "Tuesday"