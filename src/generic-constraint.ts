interface IextendsLeng {
    length: number
}

function fun<T extends IextendsLeng>(arg: T):T {
    return arg
}

let fun1: {<T extends IextendsLeng>(arg: T):T} = fun
let fun2: <T extends IextendsLeng>(arg: T) => T = fun

fun1('abc')
fun2([1,2,3,4])
fun('9999')