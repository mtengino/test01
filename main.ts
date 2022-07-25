forever(function () {
    pins.LED.digitalWrite(false)
    pins.LED.setPull(PinPullMode.PullDown)
})
