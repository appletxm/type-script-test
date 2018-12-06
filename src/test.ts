import name from './m-a.js'
import age from './m-b.js'

let my = true
let myName = "123456"
let decLiteral: number = 6
let list: Array<number> = [1, 2, 3]

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
class Person {
    construct() {
    }
    showName() {
        console.info(`.........`)
    }
}

hello("TypeScript")
