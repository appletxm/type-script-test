import name from './m-a'
import age from './m-b'

let my = true
let myName = "123456"
let decLiteral: number = 6
let list: Array<number> = [1, 2, 3]

function hello(compiler: string) {
    console.log("Hello from ...." + compiler, decLiteral, list, name, age);
}

class Person {
    construct() {
    }
    showName() {
        console.info(`.........`)
    }
}

hello("TypeScript")
