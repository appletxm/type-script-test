type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

type Alias = {num: number}
interface Interface {
    num: number
}
function aliased(arg: Alias): Alias {
    return arg
}
function interfaced(arg: Interface): Interface {
    return arg
}

let a: Alias = {num: 5}
let res2 = aliased(a)

// interface User {
//     name: string;
//     age: number;
// }
// const user: User = {
//     name: 'Jack',
//     age: 123
// }
// class SomeClass {
//     public test(para: User): number
//     public test(para: number, flag: boolean): number  
//     public test(para: User | number, flag?: boolean): number {
//         return 11;
//     }
// }
// const someClass = new SomeClass()
// someClass.test(123, false)
// someClass.test(user, false)