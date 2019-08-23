export function identity<T>(times: number, arg: T): T[] {
    let args = []
    for(var i = 0; i < times; i++) {
        args.push(arg)
    }

    return args
}

let output1 = identity<string>(2, '6')
let output2 = identity(2, 6)
console.info(output1, output2)