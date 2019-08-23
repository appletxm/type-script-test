interface paramLength {
    length: number
}

export function identityLen<T>(times: number, arg: T[]): Array<T> {
    console.info(times, arg.length)
    return arg
}

let output1 = identityLen<any>(2, [1,2,3,'55'])
let output2 = identityLen(2, [6, '7'])
console.info(output2)

let idTypes: <T>(times: number, arg: Array<T>) => T[]
let idTypes2: {<T>(times: number, arg: Array<T>) : T[]}
idTypes = identityLen
idTypes2 = identityLen
let output3 = idTypes(2, [1, 3,'6'])
let output4 = idTypes2(5, ['1', '2', 6])
console.info(output3, output4)