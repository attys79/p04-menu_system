basic.showLeds(`
    # . # . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
let item = 0
let counter = 0
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
        basic.showNumber(item)
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
