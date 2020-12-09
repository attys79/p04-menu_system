input.onButtonPressed(Button.AB, function () {
    _break = true
    led.stopAnimation()
})
let _break = false
basic.showLeds(`
    # . # . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
let item = 0
let counter = 0
_break = false
basic.forever(function () {
    led.unplot(2, item)
    if (input.buttonIsPressed(Button.A)) {
        item += 1
        if (item == 5) {
            item = 0
        }
        while (input.buttonIsPressed(Button.A)) {
            basic.pause(1)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (item == 0) {
            while (true) {
                if (_break) {
                    _break = false
                    break;
                } else {
                    basic.showString("Attila Forgacs")
                }
            }
        } else if (item == 1) {
            basic.showIcon(IconNames.SmallHeart)
        } else if (item == 2) {
            basic.showIcon(IconNames.Yes)
        } else if (item == 3) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Happy)
        }
        basic.pause(1000)
        while (input.buttonIsPressed(Button.B)) {
            basic.pause(1)
        }
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    counter += 1
    if (counter == 20) {
        counter = 0
    }
    if (counter < 10) {
        led.plot(2, item)
    }
    basic.pause(10)
})
