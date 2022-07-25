forever(function () {
    pins.LED.digitalWrite(true)
    control.waitMicros(10000)
    pins.LED.digitalWrite(false)
    control.waitMicros(10000)
})
