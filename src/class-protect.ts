class Person {
  protected name: string;
  constructor(theName: string) {
    this.name = theName
  }
}

class Faimer extends Person {
  job: string;
  age: number;
  readonly workType: string = 'ok';
  constructor(theName: string, age: number) {
    super(theName)
    this.age = age
  }

  sayHi() {
    console.info(`hay pp ${this.name}, ${this.age}`)
  }
}

var p = new Person('mm')
var f = new Faimer('kk', 30)
f.sayHi()
