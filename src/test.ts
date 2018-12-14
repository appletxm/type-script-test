import name from './m-a.js'
import age from './m-b.js'

let my = true
let myName = "123456"
let decLiteral: number = 6
let list: Array<number> = [1, 2, 3]
let stringList: string[] = ['1111', '333', '222']
let x: [string, number] = ['111', 10]

console.info(stringList)

function hello(compiler: string) {
    console.log("Hello from ...." + compiler, decLiteral, list, name, age);
}

interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Jane", lastName: "User" };
console.info(greeter(user));

// class Person {
//     construct() {
//     }
//     showName() {
//         console.info(`.........`)
//     }
// }

hello("TypeScript")

enum Color {Red = 1, Green = 2, Blue = 3}
let c:Color = Color.Blue
console.info(c)

let notSure: any = 4
notSure = `1234567 string`
notSure = 123

