monitors.setup(
1,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P13
)
monitors.clearAll()
monitors.brightnessAll(2)
let Char1 = monitors.getCustomCharacterArray("B00000000,B00000000,B00000000,B00011000,B00011000,B00000000,B00000000,B00000000")
let char2 = monitors.getCustomCharacterArray("B00000000,B00000110,B00000110,B00000000,B00000000,B01100000,B01100000,B00000000")
let char3 = monitors.getCustomCharacterArray("B00000000,B00000110,B00000110,B00011000,B00011000,B01100000,B01100000,B00000000")
let char4 = monitors.getCustomCharacterArray("B00000000,B01100110,B01100110,B00000000,B00000000,B01100110,B01100110,B00000000")
let char5 = monitors.getCustomCharacterArray("B00000000,B01100110,B01100110,B00011000,B00011000,B01100110,B01100110,B00000000")
let char6 = monitors.getCustomCharacterArray("B00000000,B11011011,B11011011,B00000000,B00000000,B11011011,B11011011,B00000000")
monitors.displayCustomCharacter(char6, 0, true)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P3) == 0) {
        basic.showNumber(3)
    }
    if (pins.digitalReadPin(DigitalPin.P4) == 0) {
        basic.showNumber(4)
    }
})
