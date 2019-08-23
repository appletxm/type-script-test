export class GenericClass<T> {
    zeroVlue: T
    add: (x: T, y: T) => T
}

let initi1 = new GenericClass<number>()
initi1.zeroVlue = 9
initi1.add = (x, y) => {
    return x + y
}
initi1.add(1, 3)