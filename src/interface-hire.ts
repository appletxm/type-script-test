interface Shape {
  color: string
}

interface PenWidth {
  widthLength: number
}

interface Squre extends Shape, PenWidth {
  sideLength: number
}

let squre = <Squre> {}
squre.color = 'red'
squre.sideLength = 100
squre.widthLength = 100
