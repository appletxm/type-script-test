interface Counter {
  (start: number): string;
  interval: number;
  reset(): void
}

function getCounter(): Counter {
  let counter = <Counter> function (start: number) {
    console.info('fun:', start)
  }
  counter.interval = 1000
  counter.reset = function() {}
  return counter
}

let c = getCounter()
c(10)
