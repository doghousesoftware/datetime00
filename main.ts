input.onButtonPressed(Button.A, function () {
    basic.showNumber(years)
    basic.showString("-")
    basic.showNumber(months)
    basic.showString("-")
    basic.showNumber(days)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(hours)
    basic.showString(":")
    basic.showNumber(minutes)
    basic.showString(":")
    basic.showNumber(seconds)
    basic.clearScreen()
})
let years = 0
let months = 0
let days = 0
let hours = 0
let minutes = 0
let seconds = 0
seconds = 22
minutes = 59
hours = 23
days = 1
months = 1
years = 2021
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
    if (hours > 23) {
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
