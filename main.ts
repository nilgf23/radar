basic.forever(function () {
    basic.showString("Nil")
})
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 13 && cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) > 1.3) {
        cuteBot.motors(randint(-20, -60), randint(-20, -60))
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
        basic.pause(500)
    } else {
        cuteBot.motors(60, 60)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x0000ff)
    }
})
