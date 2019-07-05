class Animals {
  private name: string;
  constructor(theName: string) {
    this.name = theName
  }
  protected move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters} m.`)
  }
}

class Dog extends Animals {
  color: string;
  constructor(theName: string, colorParam: string) {
    super(theName)
    this.color = colorParam
  }
  // move(distanceInMeters: number = 5) {
  //   console.info('overwrite the parent move function')
  //   super.move(distanceInMeters)
  // }
  bark() {
    console.log(`Woof! Woof!`)
  }
}

const dog: Animals = new Dog('sam', 'red')
const cat: Animals = new Animals('kitty')

console.info(dog, cat)

// dog.move()
// cat.move()

// new Animals('kk').move()