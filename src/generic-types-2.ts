export function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let x = {a: 1, b: 'abc'}
getProperty(x, 'a')

interface IClassConstraint<T> {
    new(): T
}
function create<T>(c:{new(): T}):T {
    return new c()
}



class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}
createInstance(Lion).keeper.nametag = '4'
createInstance(Bee).keeper.hasMask = false