enum Count {
  a,
  b
}

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function respond(recipient: Direction, message: Count): void {
  console.info(recipient, message)
}

respond(Direction.Up, Count.a)