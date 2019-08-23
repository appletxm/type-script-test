interface IGeneric {
    <T>(time: number, arg: Array<T>): Array<T>
}

interface IGeneric2<T> {
    (time: number, arg: Array<T>): Array<T>
}

function identityLen<T>(times: number, arg: T[]): Array<T> {
    console.info(times, arg.length)
    return arg
}
let indentity4:IGeneric = identityLen
let indentity5:IGeneric2<number> = identityLen
let output5 = indentity4(3, [1,2,3,4])
let output6 = indentity5(3, [1,2,3,6])

console.info(output5, output6)

export { indentity4 }