enum ShapeKind {
  Circle,
  Square,
}

const enum Enum {
  A = 1,
  B = A * 2
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let myEnum: Circle = {
  kind: 0,
  radius: 100,
}