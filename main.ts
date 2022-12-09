basic.forever(function () {
    if (input.lightLevel() < 80) {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        pins.analogWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("B E A A")
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Asleep)
        basic.showIcon(IconNames.Duck)
        basic.showIcon(IconNames.Pitchfork)
        basic.showIcon(IconNames.Giraffe)
        basic.showIcon(IconNames.Tortoise)
        basic.showIcon(IconNames.EigthNote)
    }
})
