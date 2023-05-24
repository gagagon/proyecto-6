function vueltas () {
    for (let index = 0; index < 15; index++) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 37)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    }
}
function cuadrado () {
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(2750)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 35)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 35)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(200)
    }
    maqueen.motorStop(maqueen.Motors.All)
}
input.onButtonPressed(Button.A, function () {
    if (ejercicio == "c") {
        ejercicio = "v"
    } else if (ejercicio == "v") {
        ejercicio = "s"
    } else if (ejercicio == "s") {
        ejercicio = "z"
    } else {
        ejercicio = "c"
    }
    basic.showString(ejercicio)
})
function zig_zag () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    basic.pause(200)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.pause(400)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(2000)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        basic.pause(400)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(2000)
    }
    maqueen.motorStop(maqueen.Motors.All)
}
input.onButtonPressed(Button.B, function () {
    if (ejercicio == "c") {
        cuadrado()
    } else if (ejercicio == "v") {
        vueltas()
    } else if (ejercicio == "s") {
        eses()
    } else {
        zig_zag()
    }
    basic.showString(ejercicio)
})
/**
 * gonzalo martinez centeno s2c
 */
function eses () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        basic.pause(2500)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
        basic.pause(2500)
    }
}
let ejercicio = ""
let strip = neopixel.create(DigitalPin.P5, 4, NeoPixelMode.RGB)
basic.showString(ejercicio)
ejercicio = "c"
basic.forever(function () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
})
