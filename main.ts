input.onButtonPressed(Button.A, function () {
    roep += -0.1
})
input.onButtonPressed(Button.B, function () {
    roep += 0.1
})
let roep = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(roep), 2)
    if (roep < 0) {
        basic.showString("A wins!")
    } else if (roep > 4) {
        basic.showString("B wins!")
    } else {
    	
    }
})
