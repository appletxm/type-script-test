interface IPersonPartial {
    name: string
    age: number
}

interface PersonReadonly {
    readonly name: string
    readonly age: number
}
// type Readonly2<T> = {
//     readonly [P in keyof T]: T[P]
// }
// type Particial<T> = {
//     [P in keyof T]?: T[P] 
// }

// type PersonPartial = Partial<Person>;
// type ReadonlyPerson = Readonly<Person>;

let ppn:IPersonPartial = {
    name: 'aa',
    age: 55
}
let ppn2: Partial<IPersonPartial> = {
    name: 'bb'
}

type PartialWithNewMember<T> = {
    [P in keyof T]: T[P]
} & {
    newMember: boolean
}
type MyPartialMm = {
    name: string, 
    age: number, 
    newMember: boolean
}
let pp5:PartialWithNewMember<MyPartialMm> = {name: 'tt', age: 50, newMember: false}
console.info('pp5:', pp5)

type Keys = 'option1' | 'option2'
type Flags = { [K in Keys]: boolean }
let fab:Flags = {'option1': true, 'option2': false}
console.info('fab:', fab)
