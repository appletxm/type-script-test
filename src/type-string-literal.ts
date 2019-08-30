type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
class UIElement {
    animate (dx: number, dy: number, easing: Easing) {
        console.info('animate:', easing, dx, dy)
    }
}

let btn = new UIElement()
btn.animate(0, 0, 'ease-in')

function createElement(tagName: 'img'): HTMLImageElement {
    return document.createElement(tagName)
}
// function createElement(tagName: string): Element {
//     return document.createElement(tagName)
// }

function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return 2
}