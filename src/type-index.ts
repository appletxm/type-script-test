interface IPlace {
    ownerAddress: string
}

interface ICar extends IPlace {
    manufacturer: string
    model: string
    year: number
}

function pluk<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    let vlaues: T[K][] = []
    keys.forEach(key => {
        vlaues.push(obj[key])
    })
    return vlaues
}

function getValue<T, K extends keyof T>(obj: T, pro: K): T[K] {
    return obj[pro]
}

let taxi:ICar = {
    manufacturer: 'toyota',
    model: 'Camery',
    year: 2014,
    ownerAddress: 'china'
}
let carProps: keyof ICar = 'year'
let values = pluk(taxi, ['model', 'year', 'ownerAddress'])
console.info('value:', values, carProps)

let pp: PersonReadonly = {
    name: 'xx',
    age: 66
}


interface Dictionary<T> {
    [key: number]: T;
}
let keys: keyof Dictionary<number> = 1
let value: Dictionary<number>[1] = 0