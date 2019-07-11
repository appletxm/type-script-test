interface MyInterface {
  name: string;
  age: number;
  job: string;
  sayHi(): void;
}

let myInfo: MyInterface = {
  name: 'tt',
  age: 50,
  job: 'ceo',
  sayHi() {
    console.info(this.name + ':' + this.age)
  }
}