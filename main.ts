joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendValue("duda", ki)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendValue("duda", be)
})
let y = 0
let x = 0
let be = 0
let ki = 0
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.showIcon(IconNames.SmallHeart)
ki = 0
be = 1
basic.forever(function () {
    x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 0, 1023, 165, 245)
    y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 0, 1023, 100, -100)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
})
