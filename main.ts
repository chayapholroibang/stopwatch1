let start = 0
let undo = 0
let กำลังนับ = 0
let elapsed = 0
let minute = 0
input.onButtonPressed(Button.A, function () {
    start += 1
    undo = start
    กำลังนับ = start
    basic.showNumber(start)
})
input.onButtonPressed(Button.AB, function () {
    start = 0
    elapsed = 0
    minute = 0
    กำลังนับ = 0
})
input.onButtonPressed(Button.B, function () {
    กำลังนับ += 1
    basic.showNumber(กำลังนับ)
})
basic.forever(function () {
    if (start == 0) {
        music.playMelody("C5 - C5 - C5 - C5 - ", 120)
        start = undo
        elapsed = undo
        minute = undo
        กำลังนับ = undo
    }
})
