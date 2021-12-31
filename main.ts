let y = 0
let x = 0
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.forever(function () {
    x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 0, 1023, -100, 100)
    y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 0, 1023, -100, 100)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
})
