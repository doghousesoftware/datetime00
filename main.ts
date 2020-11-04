input.onButtonPressed(Button.A, function () {
    datetime = "" + years.toString() + "/" + months.toString() + "/" + days.toString() + " " + hours.toString() + ":" + minutes.toString() + ":" + seconds.toString()
    basic.showString(datetime)
})
let datetime = ""
let hours = 0
let minutes = 0
let seconds = 0
let days = 1
let months = 1
let years = 2020
datetime = "null"
basic.forever(function () {
    basic.pause(1000)
    seconds += 1
    if (seconds > 59) {
        seconds = 0
        minutes += 1
    }
    if (minutes > 59) {
        minutes = 0
        hours += 1
    }
    if (hours > 24) {
        hours = 0
        days += 1
    }
    if (days > 30) {
        days += 1
        months += 1
    }
    if (months > 12) {
        months = 1
        years += 1
    }
})
