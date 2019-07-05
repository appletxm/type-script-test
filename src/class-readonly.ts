class Octopus {
  readonly numberOfLegs: number = 8;
  readonly newName: string;
  constructor(readonly name: string) {
    this.newName = name
  }

  talk() {
    console.info(`name is ${this.newName}, ${this.numberOfLegs}`)
  }
}

class SubOctopus extends Octopus{
  age: number = 10;
  constructor(newName: string, age: number) {
    super(newName)
    this.age = age
  }
}

var sub = new SubOctopus('jj', 20)