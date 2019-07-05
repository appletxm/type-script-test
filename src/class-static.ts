class Greeter {
  static standardGreeting = "Hello, there, 123";
  greeting: string;
  greet() {
      if (this.greeting) {
          return "Hello, " + this.greeting;
      }
      else {
          return Greeter.standardGreeting;
      }
  }
}

class SubGreeter extends Greeter {
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";
let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

SubGreeter.standardGreeting = '77777'
let sG = new SubGreeter()
console.info(sG.greet())
