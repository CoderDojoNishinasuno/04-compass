let 方がく = 0
basic.forever(function () {
    方がく = input.compassHeading()
    if (方がく < 45) {
        basic.showLeds(`
            . # . # .
            # # . # #
            . # . # .
            . # . # .
            # . . # #
            `)
    } else if (方がく < 135) {
        basic.showLeds(`
            . # . # .
            # # . # #
            . # . # .
            . # . # .
            . # # . .
            `)
    } else if (方がく < 225) {
        basic.showLeds(`
            # # . . .
            . # . # .
            # # . # .
            # # # # #
            # # . # .
            `)
    } else if (方がく < 315) {
        basic.showLeds(`
            # # # # #
            . # . # .
            # # # # #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . # . # .
            # # . # #
            . # . # .
            . # . # .
            # . . # #
            `)
    }
})
